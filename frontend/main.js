const BigNumber = require('bignumber.js');
const info = require("../build/deployments/.json"); //change name
const abi = info["abi"];
const deployment = info["deployment"];
const contractAddress = deployment["address"];

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
    const amountLeveragedTokensStr = getBigNumber18decimals(moneyForInvestment/2).toString();

    const writeOptionsInitiatePool = {
        contractAddress: contractAddress,
        functionName: "initiatePool",
        abi: abi,
        params: {amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsInitiatePool);
 }


async function issueBtcUp() {
    const moneyForInvestment  = parseFloat(document.getElementById("amount-btcup-issue").value);
    const priceBtcUp = getBtcUpPrice();
    const amountLeveragedTokensStr = getBigNumber18decimals(moneyForInvestment / price).toString();

    const writeOptionsIssueBtcUp = {
        contractAddress: contractAddress,
        functionName: "issueBtcUp",
        abi: abi,
        params: {amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcUp);
}


async function issueBtcDown() {
    const moneyForInvestment = parseFloat(document.getElementById("amount-btcdown-issue").value);
    const priceBtcDown = getBtcDownPrice();
    const amountLeveragedTokensStr = getBigNumber18decimals(moneyForInvestment / price).toString();

    const writeOptionsIssueBtcDown = {
        contractAddress: contractAddress,
        functionName: "issueBtcDown",
        abi: abi,
        params: {amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcDown);

}

async function redeemBtcUp() {
    let amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    amountLeveragedTokensStr = getBigNumber18decimals(amountLeveragedTokens).toString();

    const writeOptionsRedeemBtcUp = {
        contractAddress: contractAddress,
        functionName: "redeemBtcUp",
        abi: abi,
        params: {amountLeveragedTokens}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);

}

async function redeemBtcDown() {
    const amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    amountLeveragedTokensStr = getBigNumber18decimals(moneyForInvestment).toString()

    const writeOptionsRedeemBtcUp = {
        contractAddress: contractAddress,
        functionName: "redeemBtcDown",
        abi: abi,
        params: {amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}


function getBigNumber18decimals(x) {
    let x18decimals = new BigNumber(x);
    let y18decimals = new BigNumber('1000000000000000000');
    
    return x18decimals.multipliedBy(y18decimals);
}    


async function getBtcUpPrice() {
    const readOptionsBtcUpPrice = {
        contractAddress: contractAddress,
        functionName: "getBtcUpPrice",
        abi: abi
    };
    
    const BtcUpPrice = await Moralis.executeFunction(readOptionsBtcUpPrice);
    return BtcUpPrice.toNumber();
}


async function getBtcDownPrice() {
    const readOptionsBtcDownPrice = {
        contractAddress: contractAddress,
        functionName: "getBtcDownPrice",
        abi: abi
    };
    
    const BtcDownPrice = await Moralis.executeFunction(readOptionsBtcDownPrice);
    return BtcDownPrice.toNumber();
}


document.getElementById("connect-btn").onclick = connect;
document.getElementById("disconnect-btn").onclick = disconnect;
document.getElementById("initiate-pool-btn").onclick = initiatePool;
document.getElementById("issue-btcup-btn").onclick = issueBtcUp;
document.getElementById("issue-btcdown-btn").onclick = issueBtcDown;
document.getElementById("redeem-btc-up-btn").onclick = redeemBtcUp;
document.getElementById("redeem-btc-down-btn").onclick = redeemBtcDown;