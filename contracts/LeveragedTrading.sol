// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
}

contract BTCUP is ERC20 {
    constructor() ERC20("Bitcoin Up", "BTCUP") {
    }

    function mint(uint256 quantity) public {
        _mint(tx.origin, quantity);
    }

    function burn(uint256 quantity) public {
        _burn(tx.origin, quantity);
    }

    function decimals() public view override returns (uint8) {
        return 6;
    }
}

contract BTCDOWN is ERC20 {
    constructor() ERC20("Bitcoin Down", "BTCDOWN") {
    }

    function mint(uint256 quantity) public {
        _mint(tx.origin, quantity);
    }

    function burn(uint256 quantity) public {
        _burn(tx.origin, quantity);
    }

    function decimals() public view override returns (uint8) {
        return 6;
    }
}

contract LeveragedTrading is Ownable {
    using SafeMath for uint256;

    uint256 public priceBtcUp = 10 ** 6;
    uint256 public priceBtcDown = 10 ** 6;        // 6 decimals

    uint256 public collateralBtcUp = 0;          //6 decimals
    uint256 public collateralBtcDown = 0;

    uint256 public amountBtcUp = 0;           // 6 decimals
    uint256 public amountBtcDown = 0;         // 6 decimals

    uint256 public lastBtcPrice = 0;       // 8 decimals, chainlink conventions

    bool public poolIsInitiated = false;

    address addressUsdc = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;  // <- Kovan  //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926;
    address addressBtcUSDFeed =  0x6135b13325bfC4B00278B4abC5e20bbce2D6580e; // <- Kovan          // 0xECe365B379E1dD183B20fc5f022230C044d51404;

    BTCUP btcUp = new BTCUP();
    BTCDOWN btcDown = new BTCDOWN();


    function initiatePool(uint256 amountUsdc) public onlyOwner {
        require(!poolIsInitiated, "The pool was already initiated.");

        issueBtcUp(amountUsdc.div(2));
        issueBtcDown(amountUsdc.div(2));

        poolIsInitiated = true;
    }

    function issueBtcUp(uint256 amountUsdc) public {
        rebalanceLeveragedTokens();
        
        priceBtcUp = getBtcUpPrice();
        uint256 amountLeveragedTokens = amountUsdc.mul(10 ** 6).div(priceBtcUp);

        btcUp.mint(amountLeveragedTokens);
        amountBtcUp = amountBtcUp.add(amountLeveragedTokens);
        collateralBtcUp = collateralBtcUp.add(amountUsdc);

        IERC20 usdc = IERC20(addressUsdc);
        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), "You don't have enough USDC.");
    }

    function issueBtcDown(uint256 amountUsdc) public {
        rebalanceLeveragedTokens();
        
        priceBtcDown = getBtcDownPrice();
        uint256 amountLeveragedTokens = amountUsdc.mul(10 ** 6).div(priceBtcDown);

        btcDown.mint(amountLeveragedTokens);
        amountBtcDown = amountBtcDown.add(amountLeveragedTokens);
        collateralBtcDown = collateralBtcDown.add(amountUsdc);

        IERC20 usdc = IERC20(addressUsdc);
        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), "You don't have enough USDC.");
    }

    function redeemBtcUp(uint256 amountLeveragedTokens) public {
        rebalanceLeveragedTokens();
        btcUp.burn(amountLeveragedTokens);

        priceBtcUp = getBtcUpPrice();
        uint256 amountUsdc = amountLeveragedTokens.mul(priceBtcUp).div(10 ** 6);

        amountBtcUp = amountBtcUp.sub(amountLeveragedTokens);
        collateralBtcUp = collateralBtcUp.sub(amountUsdc);

        IERC20 usdc = IERC20(addressUsdc);
        require(usdc.transfer(msg.sender, amountUsdc), "Not enough usdc available");
    }

    function redeemBtcDown(uint256 amountLeveragedTokens) public {
        rebalanceLeveragedTokens();
        btcDown.burn(amountLeveragedTokens);

        priceBtcDown = getBtcDownPrice();
        uint256 amountUsdc = amountLeveragedTokens.mul(priceBtcDown).div(10 ** 6);
        
        amountBtcDown = amountBtcDown.sub(amountLeveragedTokens);
        collateralBtcDown = collateralBtcDown.sub(amountUsdc);

        IERC20 usdc = IERC20(addressUsdc);
        require(usdc.transfer(msg.sender,  amountUsdc), "Not enough usdc available");

    }

    function rebalanceLeveragedTokens() public {
        uint256 btcPrice = getBtcPrice();
        if ((collateralBtcUp > 0) && (collateralBtcDown > 0)) {
            uint256 rebalanceAmount = getRebalanceAmount(btcPrice);
            if (getSign(btcPrice) > 0) {
                collateralBtcUp = collateralBtcUp.add(rebalanceAmount);
                collateralBtcDown = collateralBtcDown.sub(rebalanceAmount);
            }

            else {
                collateralBtcUp = collateralBtcUp.sub(rebalanceAmount);
                collateralBtcDown = collateralBtcDown.add(rebalanceAmount);
            }

        }

        lastBtcPrice = btcPrice;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getSign(uint256 btcPrice) internal view returns (int256){
        if (btcPrice > lastBtcPrice) {
            return 1;
        }
        else {
            return -1;
        }
    }
 
    function getRebalanceAmount(uint256 priceBtc) internal view returns (uint256){
        uint256 priceDiff = getPriceDiff(priceBtc);

        return min(collateralBtcUp, collateralBtcDown).mul(L(priceDiff)).div(10 ** 6);
    }

// getBtcUpPrice() 6 decimals
    function getBtcUpPrice() public view returns (uint256) {
        return amountBtcUp == 0 ?  priceBtcUp : collateralBtcUp.mul(10 ** 6).div(amountBtcUp);
    }

// getBtcDownPrice() 6 decimals
    function getBtcDownPrice() public view returns (uint256) {//6 decimals
        return amountBtcDown == 0 ?  priceBtcDown : collateralBtcDown.mul(10 ** 6).div(amountBtcDown);
    }

// get the price of our asset with 8 decimals
    function getBtcPrice() public view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(addressBtcUSDFeed);
        (,int256 answer,,,) = priceFeed.latestRoundData();

         return uint256(answer);             // we call chainlink oracle to get the price of the asset
         
    }
    
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a <= b ? a : b;
    }

    function L(uint256 x) internal pure returns (uint256) {            //6  decimals

        uint256 denom = 9 * (x ** 2 / 10 ** 6)  + 3 * x + 10 ** 6;
        uint256 num = 10 ** 12;

        return 10 ** 6 - num / denom;
    }

    function getPriceDiff(uint256 btcPrice) internal view returns (uint256) {     //6 decimals
        if (btcPrice > lastBtcPrice) {
            return btcPrice.mul(10 ** 6).div(lastBtcPrice).sub(10 ** 6);
        }

        else {
            return lastBtcPrice.mul(10 ** 6).div(btcPrice).sub(10 ** 6);
        }

    }

    function getBtcupBalance() public view returns(uint256) {
        return btcUp.balanceOf(msg.sender);
    }

    function getBtcdownBalance() public view returns(uint256) {
        return btcDown.balanceOf(msg.sender);
    }

}

