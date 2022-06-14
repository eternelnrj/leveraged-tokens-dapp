// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts@4.0.0/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
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


contract LeverageTrading{

    bool public poolIsInitiated = false;

    uint256 public priceBtcUp = 10 ** 6;
    uint256 public priceBtcDown = 10 ** 6;        // 6 decimals

    uint256 public collateralBtcUp = 0;          //6 decimals
    uint256 public collateralBtcDown = 0;

    uint256 public amountBtcUp = 0;           // 6 decimals
    uint256 public amountBtcDown = 0;         // 6 decimals

    uint256 public lastBtcPrice = 0;       // 8 decimals, chainlink conventions

    address addressUsdc = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;  // <- Kovan  //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926;
    address addressBtcUSDFeed =  0x6135b13325bfC4B00278B4abC5e20bbce2D6580e; // <- Kovan          // 0xECe365B379E1dD183B20fc5f022230C044d51404;


    BTCUP btcUp = new BTCUP();
    BTCDOWN btcDown = new BTCDOWN();


    function initiatePool(uint256 amountLeveragedTokens) public {
        require(!poolIsInitiated, "The pool was already initiated.");

        issueBtcUp(amountLeveragedTokens);
        issueBtcDown(amountLeveragedTokens);

        poolIsInitiated = true;
    }



    function issueBtcUp(uint256 amountLeveragedTokens) public {
        rebalanceLeveragedTokens();
        btcUp.mint(amountLeveragedTokens);

        IERC20 usdc = IERC20(addressUsdc);
        priceBtcUp = getBtcUpPrice();

        uint256 amountUsdc = amountLeveragedTokens * priceBtcUp / 10 ** 6;

        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), "You don't have enough USDC");

        amountBtcUp += amountLeveragedTokens;
        collateralBtcUp += amountUsdc;
    }



    function issueBtcDown(uint256 amountLeveragedTokens) public {
        rebalanceLeveragedTokens();
        btcDown.mint(amountLeveragedTokens);

        IERC20 usdc = IERC20(addressUsdc);
        priceBtcDown = getBtcDownPrice();
        uint256 amountUsdc = amountLeveragedTokens * priceBtcDown / 10 ** 6;

        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), "You don't have enough USDC");

        amountBtcDown += amountLeveragedTokens;
        collateralBtcDown += amountUsdc;
    }



    function redeemBtcUp(uint256 amountLeveragedTokens) public {
        rebalanceLeveragedTokens();
        btcUp.burn(amountLeveragedTokens);

        IERC20 usdc = IERC20(addressUsdc);
        priceBtcUp = getBtcUpPrice();

        uint256 amountUsdc = amountLeveragedTokens * priceBtcUp / 10 ** 6;
        require(usdc.transfer(msg.sender, amountUsdc), "Not enough usdc available");

        amountBtcUp -= amountLeveragedTokens;
        collateralBtcUp -= amountUsdc;
    }



    function redeemBtcDown(uint256 amountLeveragedTokens) public {
        rebalanceLeveragedTokens();
        btcDown.burn(amountLeveragedTokens);

        IERC20 usdc = IERC20(addressUsdc);
        priceBtcDown = getBtcDownPrice();
    
        uint256 amountUsdc = amountLeveragedTokens * priceBtcDown / 10 ** 6;
        require(usdc.transfer(msg.sender,  amountUsdc), "Not enough usdc available");

        amountBtcDown -= amountLeveragedTokens;
        collateralBtcDown -= amountUsdc;

    }



    function rebalanceLeveragedTokens() public {
        uint256 btcPrice = getBtcPrice();
        if ((collateralBtcUp > 0) && (collateralBtcDown > 0)) {
            uint256 rebalanceAmount = getRebalanceAmount(btcPrice);
            if (getSign(btcPrice) > 0) {
                collateralBtcUp += rebalanceAmount;
                collateralBtcDown -= rebalanceAmount;
            }

            else {
                collateralBtcUp -= rebalanceAmount;
                collateralBtcDown += rebalanceAmount;
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

        return min(collateralBtcUp, collateralBtcDown) * L(priceDiff) / 10 ** 6;
    }


// getBtcUpPrice() 6 decimals
    function getBtcUpPrice() public view returns (uint256) {
        return amountBtcUp == 0 ?  priceBtcUp : collateralBtcUp * 10 ** 6 / amountBtcUp ;
    }


// getBtcDownPrice() 6 decimals
    function getBtcDownPrice() public view returns (uint256) {//6 decimals
        return amountBtcDown == 0 ?  priceBtcDown : collateralBtcDown * 10 ** 6 / amountBtcDown ;
    }


// get the price of our asset with 8 decimals
    function getBtcPrice() internal view returns (uint256) {
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
            return 10 ** 6 * btcPrice / lastBtcPrice - 10 ** 6;
        }

        else {
            return 10 ** 6 * lastBtcPrice / btcPrice - 10 ** 6;
        }

    }


    function getBtcupBalance() public view returns(uint256) {
        return btcUp.balanceOf(msg.sender);
    }


    function getBtcdownBalance() public view returns(uint256) {
        return btcDown.balanceOf(msg.sender);
    }


}