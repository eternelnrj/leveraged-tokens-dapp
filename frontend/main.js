const BigNumber = require('bignumber.js');

const leverageTradingInfo = require("../build/deployments/42/0x46812881b66B476DEC737A6AC75886dE896E505A.json"); //change name
const leverageTradingAbi = leverageTradingInfo["abi"];
const leverageTradingContractAddress = leverageTradingInfo["deployment"]["address"];


btcupContractAddress = "0x86e892136f11531712b60914879351097448706b";
btcupAbi = require("../build/contracts/BTCUP.json")["abi"];

btcdownContractAddress = "0x3a37F3751BAF93442a24CAfC28a1419B73163B00";
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
    const moneyForInvestmentStr = getBigNumberWithDecimals(moneyForInvestment, 6).toString();

    const tx = await approve(moneyForInvestmentStr, leverageTradingContractAddress, usdcContractAddress, usdcAbi);
    tx.wait(2);

    const writeOptionsInitiatePool = {
        contractAddress: leverageTradingContractAddress,
        functionName: "initiatePool",
        abi: leverageTradingAbi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsInitiatePool);
 }


async function issueBtcUp() {
    const moneyForInvestment  = parseFloat(document.getElementById("amount-btcup-issue").value);
    const moneyForInvestmentMaxAllowedStr =  getBigNumberWithDecimals(moneyForInvestment * 1.1, 6).toString();

    const tx = await approve(moneyForInvestmentMaxAllowedStr, leverageTradingContractAddress, usdcContractAddress, usdcAbi);
    tx.wait(1);

    const priceBtcUp = await getBtcUpPrice();
    console.log("price btc up is: " + priceBtcUp);
    console.log("max allowed investment 6 decimals: " + moneyForInvestmentMaxAllowedStr);

    //console.log(priceBtcUp);
    //console.log(moneyForInvestment);
    const amountLeveragedTokensStr = getBigNumberWithDecimals((moneyForInvestment * 10 ** 6 / priceBtcUp), 6).toString();

    //console.log(amountLeveragedTokensStr);
    const writeOptionsIssueBtcUp = {
        contractAddress: leverageTradingContractAddress,
        functionName: "issueBtcUp",
        abi: leverageTradingAbi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcUp);
}


async function issueBtcDown() {
    const moneyForInvestment = parseFloat(document.getElementById("amount-btcdown-issue").value);
    const moneyForInvestmentMaxAllowedStr =  getBigNumberWithDecimals(moneyForInvestment * 1.1, 6).toString();
    const priceBtcDown = await getBtcDownPrice();
    console.log("price btc down is: " + priceBtcDown);
    console.log("max allowed investment 6 decimals: " + moneyForInvestmentMaxAllowedStr);

    const tx = await approve(moneyForInvestmentMaxAllowedStr, leverageTradingContractAddress, usdcContractAddress, usdcAbi);
    tx.wait(1);

    const amountLeveragedTokensStr = getBigNumberWithDecimals(moneyForInvestment * 10 ** 6/ priceBtcDown, 6).toString();

    const writeOptionsIssueBtcDown = {
        contractAddress: leverageTradingContractAddress,
        functionName: "issueBtcDown",
        abi: leverageTradingAbi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcDown);
}


async function redeemBtcUp() {
    let amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    amountLeveragedTokensStr = getBigNumberWithDecimals(amountLeveragedTokens, 6).toString();

    console.log("max allowed btcup to redeem (6 decimals): " + amountLeveragedTokensStr);

    const tx = await approve(amountLeveragedTokensStr,  leverageTradingContractAddress,  btcupContractAddress, btcupAbi);
    tx.wait(1);

    const writeOptionsRedeemBtcUp = {
        contractAddress: leverageTradingContractAddress,
        functionName: "redeemBtcUp",
        abi: leverageTradingAbi,
        params: {amountLeveragedTokens: amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}

async function redeemBtcDown() {
    const amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    amountLeveragedTokensStr = getBigNumberWithDecimals(amountLeveragedTokens, 6).toString();
    console.log("max allowed btcdown to redeem (6 decimals): " + amountLeveragedTokensStr);

    
    const tx = await approve(amountLeveragedTokensStr, leverageTradingContractAddress,  btcdownContractAddress, btcdownAbi);
    tx.wait(1);

    const writeOptionsRedeemBtcUp = {
        contractAddress: leverageTradingContractAddress,
        functionName: "redeemBtcDown",
        abi: leverageTradingAbi,
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}



async function getBtcUpPrice() {
    const readOptionsBtcUpPrice = {
        contractAddress: leverageTradingContractAddress,
        functionName: "getBtcUpPrice",
        abi: leverageTradingAbi
    };
    
    const BtcUpPrice = await Moralis.executeFunction(readOptionsBtcUpPrice);
    return BtcUpPrice.toNumber();
}


async function getBtcDownPrice() {
    const readOptionsBtcDownPrice = {
        contractAddress: leverageTradingContractAddress,
        functionName: "getBtcDownPrice",
        abi: leverageTradingAbi
    };
    
    const BtcDownPrice = await Moralis.executeFunction(readOptionsBtcDownPrice);
    return BtcDownPrice.toNumber();
}


async function approve(amountBigNumberWithDecimalsStr, spenderAddress, contractAddress, abi) {


    const writeOptionsApproval = {
        contractAddress: contractAddress,
        functionName: "approve",
        abi: abi,
        params: {spender: spenderAddress, amount: amountBigNumberWithDecimalsStr}
    };

    return await Moralis.executeFunction(writeOptionsApproval);
}


function getBigNumberWithDecimals(x, numberDecimals) {
    let xAsBigNumber = new BigNumber(x);
    let yAsBigNumberWithDecimals = new BigNumber("1".concat("0".repeat(numberDecimals) ));
    
    return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
}    


document.getElementById("connect-btn").onclick = connect;
document.getElementById("disconnect-btn").onclick = disconnect;
document.getElementById("initiate-pool-btn").onclick = initiatePool;
document.getElementById("issue-btcup-btn").onclick = issueBtcUp;
document.getElementById("issue-btcdown-btn").onclick = issueBtcDown;
document.getElementById("redeem-btcup-btn").onclick = redeemBtcUp;
document.getElementById("redeem-btcdown-btn").onclick = redeemBtcDown;