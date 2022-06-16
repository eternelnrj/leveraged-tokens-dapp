const BigNumber = require('bignumber.js');

const leverageTradingInfo = require("../build/deployments/0xf7981d5004f43E461363f311047E4174178eD042.json"); //change name
const leverageTradingAbi = leverageTradingInfo["abi"];
const leverageTradingContractAddress = leverageTradingInfo["deployment"]["address"];


btcupContractAddress = "0x3CcF16f6658a878e6cdbb6f74A80F76Fd361577C";
btcupAbi = require("../build/contracts/BTCUP.json")["abi"];

btcdownContractAddress = "0x201dB485F1ba5d11009ceBBea2676020AC03D3aD";
btcdownAbi = require("../build/contracts/BTCDOWN.json")["abi"];

usdcContractAddress = "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede";
usdcAbi = require("../build/contracts/IERC20.json")["abi"];


const serverUrl = "https://rjfi3tltmxvh.usemoralis.com:2053/server";
const appId = "97wagl7iRrfE4SiHD8Y0aR77PrX5Btie0sisKP26";
Moralis.start({ serverUrl, appId});


async function connect() { 
    if (!Moralis.User.current()) {
      await Moralis.authenticate({ signingMessage: "Log in using Moralis"});
    }
  }
  
async function disconnect() { 
    if (Moralis.User.current()) { 
      Moralis.User.logOut();
    }
  }

async function initiatePool() {
    const moneyForInvestment = parseFloat(document.getElementById("amount-initial-liquidity").value);
    const amountLeveragedTokensStr = getBigNumberWithDecimals(moneyForInvestment/2, 6).toString();
    
    await approve(amountLeveragedTokensStr,  usdcContractAddress, usdcAbi);

    const writeOptionsInitiatePool = {
        contractAddress: contractAddress,
        functionName: "initiatePool",
        abi: leverageTradingAbi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsInitiatePool);
 }


async function issueBtcUp() {
    const moneyForInvestment  = parseFloat(document.getElementById("amount-btcup-issue").value);
    const moneyForInvestmentMaxAllowed =  getBigNumberWithDecimals(moneyForInvestment * 1.1, 6);

    await approve(moneyForInvestmentMaxAllowed,  usdcContractAddress, usdcAbi);

    const priceBtcUp = getBtcUpPrice();
    const amountLeveragedTokensStr = getBigNumberWithDecimals((moneyForInvestment / price), 6);

    const writeOptionsIssueBtcUp = {
        contractAddress: contractAddress,
        functionName: "issueBtcUp",
        abi: abi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcUp);
}


async function issueBtcDown() {
    const moneyForInvestment = parseFloat(document.getElementById("amount-btcdown-issue").value);
    const moneyForInvestmentMaxAllowed =  getBigNumberWithDecimals(moneyForInvestment * 1.1, 6);
    const priceBtcDown = getBtcDownPrice();

    await approve(moneyForInvestmentMaxAllowed,  usdcContractAddress, usdcAbi);

    const amountLeveragedTokensStr = getBigNumberWithDecimals(moneyForInvestment / priceBtcDown, 6).toString();

    const writeOptionsIssueBtcDown = {
        contractAddress: contractAddress,
        functionName: "issueBtcDown",
        abi: abi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcDown);
}


async function redeemBtcUp() {
    let amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    amountLeveragedTokensStr = getBigNumberDecimals(amountLeveragedTokens, 6).toString();

    await approve(amountLeveragedTokensStr,  btcupContractAddress, btcupAbi);


    const writeOptionsRedeemBtcUp = {
        contractAddress: leverageTradingContractAddress,
        functionName: "redeemBtcUp",
        abi: abi,
        params: {amountLeveragedTokens: amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}

async function redeemBtcDown() {
    const amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    amountLeveragedTokensStr = getBigNumberDecimals(amountLeveragedTokens, 6).toString();
    await approve(amountLeveragedTokensStr,  btcdownContractAddress, btcdownAbi);

    const writeOptionsRedeemBtcUp = {
        contractAddress: leverageTradingContractAddress,
        functionName: "redeemBtcDown",
        abi: abi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}



async function getBtcUpPrice() {
    const readOptionsBtcUpPrice = {
        contractAddress: leverageTradingContractAddress,
        functionName: "getBtcUpPrice",
        abi: abi
    };
    
    const BtcUpPrice = await Moralis.executeFunction(readOptionsBtcUpPrice);
    return BtcUpPrice.toNumber();
}


async function getBtcDownPrice() {
    const readOptionsBtcDownPrice = {
        contractAddress: leverageTradingContractAddress,
        functionName: "getBtcDownPrice",
        abi: abi
    };
    
    const BtcDownPrice = await Moralis.executeFunction(readOptionsBtcDownPrice);
    return BtcDownPrice.toNumber();
}


async function approve(amountBigNumberWithDecimals,  contractAddressERC20Token, erc20TokenAbi) {


    const writeOptionsApproval = {
        contractAddress: contractAddressERC20Token,
        functionName: "approve",
        abi: erc20TokenAbi,
        params: {spender: contractAddress, amount: amountBigNumberWithDecimals}
    };

    await Moralis.executeFunction(writeOptionsApproval);
}


function getBigNumberWithDecimals(x, numberDecimals) {
    let xAsBigNumber = new BigNumber(x);
    let yAsBigNumberWithDecimals = new BigNumber(string.concat("1", "0".repeat(numberDecimals) ));
    
    return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
}    


document.getElementById("connect-btn").onclick = connect;
document.getElementById("disconnect-btn").onclick = disconnect;
document.getElementById("initiate-pool-btn").onclick = initiatePool;
document.getElementById("issue-btcup-btn").onclick = issueBtcUp;
document.getElementById("issue-btcdown-btn").onclick = issueBtcDown;
document.getElementById("redeem-btc-up-btn").onclick = redeemBtcUp;
document.getElementById("redeem-btc-down-btn").onclick = redeemBtcDown;