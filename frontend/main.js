import {leverageTradingInfo, btcupInfo,  btcdownInfo, usdcInfo} from "./contracts_and_abi.js"
import {getBtcUpPrice, getBtcDownPrice} from "./price_functions"
import {getBigNumberWithDecimals, approve} from "./secondary_functions.js"


const BigNumber = require('bignumber.js');
const config = require("./.config.json");

const serverUrl = config["serverUrl"];
const appId = config["appId"];
Moralis.start({ serverUrl, appId});



async function connect() { 
    if (!Moralis.User.current()) {
      await Moralis.authenticate({ signingMessage: "Log in using Moralis"});
    }
  }
  

  async function issueBtcUp() {
    const moneyForInvestment  = parseFloat(document.getElementById("amount-btcup-issue").value);
    const moneyForInvestmentMaxAllowedStr =  getBigNumberWithDecimals(moneyForInvestment * 1.1, 6).toString();
                                                           
    const tx = await approve(moneyForInvestmentMaxAllowedStr, leverageTradingInfo["contractAddress"], usdcInfo["contractAddress"], usdcInfo["abi"]);
    tx.wait(1);

    const priceBtcUp = await getBtcUpPrice();
    const amountLeveragedTokensStr = getBigNumberWithDecimals((moneyForInvestment * 10 ** 6 / priceBtcUp), 6).toString();

    const writeOptionsIssueBtcUp = {
        contractAddress: leverageTradingInfo["contractAddress"],
        functionName: "issueBtcUp",
        abi: leverageTradingInfo["abi"],
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcUp);
}




async function issueBtcDown() {
    const moneyForInvestment = parseFloat(document.getElementById("amount-btcdown-issue").value);
    const moneyForInvestmentMaxAllowedStr =  getBigNumberWithDecimals(moneyForInvestment * 1.1, 6).toString();
    const priceBtcDown = await getBtcDownPrice();


    const tx = await approve(moneyForInvestmentMaxAllowedStr, leverageTradingInfo["contractAddress"], usdcInfo["contractAddress"], usdcInfo["abi"]);
    tx.wait(1);

    const amountLeveragedTokensStr = getBigNumberWithDecimals(moneyForInvestment * 10 ** 6/ priceBtcDown, 6).toString();

    const writeOptionsIssueBtcDown = {
        contractAddress: leverageTradingInfo["contractAddress"],
        functionName: "issueBtcDown",
        abi: leverageTradingInfo["abi"],
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsIssueBtcDown);
}



async function redeemBtcUp() {
    let amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    const amountLeveragedTokensStr = getBigNumberWithDecimals(amountLeveragedTokens, 6).toString();

    const tx = await approve(amountLeveragedTokensStr,  leverageTradingInfo["contractAddress"],  btcupInfo["contractAddress"],  btcupInfo["abi"]);
    tx.wait(1);

    const writeOptionsRedeemBtcUp = {
        contractAddress: leverageTradingInfo["contractAddress"],
        functionName: "redeemBtcUp",
        abi: leverageTradingInfo["abi"],
        params: {amountLeveragedTokens: amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}


async function redeemBtcDown() {
    const amountLeveragedTokens = parseFloat(document.getElementById("amount-btcdown-redeem").value);
    const amountLeveragedTokensStr = getBigNumberWithDecimals(amountLeveragedTokens, 6).toString();

    
    const tx = await approve(amountLeveragedTokensStr, leverageTradingInfo["contractAddress"],  btcdownInfo["contractAddress"], btcdownInfo["abi"]);
    tx.wait(1);

    const writeOptionsRedeemBtcUp = {
        contractAddress: leverageTradingInfo["contractAddress"],
        functionName: "redeemBtcDown",
        abi: leverageTradingInfo["abi"],
        params: {amountLeveragedTokens : amountLeveragedTokensStr}
    };

    await Moralis.executeFunction(writeOptionsRedeemBtcUp);
}


  document.getElementById("connect-btn").onclick = connect;
  document.getElementById("issue-btcup-btn").onclick = issueBtcUp;
  document.getElementById("issue-btcdown-btn").onclick = issueBtcDown;
  document.getElementById("redeem-btcup-btn").onclick = redeemBtcUp;
  document.getElementById("redeem-btcdown-btn").onclick = redeemBtcDown;

  export {leverageTradingInfo};