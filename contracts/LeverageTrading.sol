// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}



contract BTCUP is ERC20{
    constructor() ERC20("Bitcoin Up", "BTCUP") {
    }

    function mint(uint256 quantity) public{
        _mint(msg.sender, quantity);
    }

    function burn(uint256 quantity) public{
        _burn(msg.sender, quantity);
    }
}


contract BTCDOWN is ERC20{
    constructor() ERC20("Bitcoin Down", "BTCDOWN") {
    }

    function mint(uint256 quantity) public{
        _mint(msg.sender, quantity);
    }

    function burn(uint256 quantity) public{
        _burn(msg.sender, quantity);
    }
}



contract LeverageTrading{

    bool poolIsInitiated = false;

    uint256 priceBtcUp = 10 ** 18;
    uint256 priceBtcDown = 10 ** 18;

    uint256 collateralBtcUp = 0;
    uint256 collateralBtcDown = 0;

    uint256 amountBtcUp = 0;
    uint256 amountBtcDown = 0;

    uint256 lastBtcPrice = 0;

    address addressUsdc = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;  // <- Kovan  //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926;
    address public addressBtcUSDFeed =  0x6135b13325bfC4B00278B4abC5e20bbce2D6580e; // <- Kovan          // 0xECe365B379E1dD183B20fc5f022230C044d51404;


    BTCUP btcUp = new BTCUP();
    BTCDOWN btcDown = new BTCDOWN();


    function initiatePool(uint256 amountLeverageTokens) public {
        require(!poolIsInitiated, "The pool was already initiated.");
        issueBtcUp(amountLeverageTokens);
        issueBtcDown(amountLeverageTokens);

        poolIsInitiated = true;
    }



    function issueBtcUp(uint256 amountLeverageTokens) public {
        rebalanceLeverageTokens();
        btcUp.mint(amountLeverageTokens);

        IERC20 usdc = IERC20(addressUsdc);
        uint256 amountUsdc = amountLeverageTokens * getBtcUpPrice() / 10 ** 18;
        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), "You don't have enough USDC");

        amountBtcUp += amountLeverageTokens;
        collateralBtcUp += amountUsdc;
    }



    function issueBtcDown(uint256 amountLeverageTokens) public {
        rebalanceLeverageTokens();
        btcDown.mint(amountLeverageTokens);

        IERC20 usdc = IERC20(addressUsdc);
        uint256 amountUsdc = amountLeverageTokens * getBtcDownPrice() / 10 ** 18;
        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), "You don't have enough USDC");

        amountBtcDown += amountLeverageTokens;
        collateralBtcDown += amountUsdc;
    }



    function redeemBtcUp(uint256 amountLeverageTokens) public {
        rebalanceLeverageTokens();
        btcUp.burn(amountLeverageTokens);

        IERC20 usdc = IERC20(addressUsdc);
        uint256 amountUsdc = amountLeverageTokens * getBtcUpPrice() / 10 ** 18;
        require(usdc.transfer(msg.sender, amountUsdc), "Not enough usdc available");

        amountBtcUp -= amountLeverageTokens;
        collateralBtcUp -= amountUsdc;
    }



    function redeemBtcDown(uint256 amountLeverageTokens) public {
        rebalanceLeverageTokens();
        btcDown.burn(amountLeverageTokens);

        IERC20 usdc = IERC20(addressUsdc);
        uint256 amountUsdc = amountLeverageTokens * getBtcDownPrice() / 10 ** 18;
        require(usdc.transfer(msg.sender,  amountUsdc), "Not enough usdc available");

        amountBtcDown -= amountLeverageTokens;
        collateralBtcDown -= amountUsdc;
    }



    function rebalanceLeverageTokens() public {
        uint256 btcPrice = getBtcPrice();
        if (poolIsInitiated) {
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
        return min(collateralBtcUp, collateralBtcDown) * L(priceDiff) / 10 ** 18;
    }


// getBtcUpPrice() 18 decimals
    function getBtcUpPrice() internal view returns (uint256) {
        return collateralBtcUp / amountBtcUp * 10 ** 18;
    }


// getBtcDownPrice() 18 decimals
    function getBtcDownPrice() internal view returns (uint256) {//18 decimals
        return collateralBtcDown / amountBtcDown * 10 ** 18;
    }


// get the price of our asset with 18 decimals
    function getBtcPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(addressBtcUSDFeed);
        (,int256 answer,,,) = priceFeed.latestRoundData();

         return uint256(answer);             // we call chainlink oracle to get the price of the asset
         
    }

    
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a <= b ? a : b;
    }



    function L(uint256 x) internal pure returns (uint256) {            //18 decimals

        uint256 denom = 9 * (x ** 2 / 10 ** 18)  + 3 * x + 10 ** 18;
        uint256 num = 10 ** 36;

        return num / denom;
    } 


    function getPriceDiff(uint256 btcPrice) internal view returns (uint256) {
        if (btcPrice> lastBtcPrice) {
            return 10 ** 18 * btcPrice / lastBtcPrice - 10 ** 18;
        }

        else {
            return 10 ** 18 * lastBtcPrice / btcPrice - 10 ** 18;
        }

    }


}