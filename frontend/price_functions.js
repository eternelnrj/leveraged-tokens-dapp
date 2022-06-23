import {leverageTradingInfo, btcupInfo,  btcdownInfo,  usdcInfo} from "./contracts_and_abi.js"



async function getBtcUpPrice() {
    const readOptionsBtcUpPrice = {
        contractAddress: leverageTradingInfo["contractAddress"],
        functionName: "getBtcUpPrice",
        abi: leverageTradingInfo["abi"]
    };
    
    const BtcUpPrice = await Moralis.executeFunction(readOptionsBtcUpPrice);
    return BtcUpPrice.toNumber();
}



async function getBtcDownPrice() {
    const readOptionsBtcDownPrice = {
        contractAddress: leverageTradingInfo["contractAddress"],
        functionName: "getBtcDownPrice",
        abi: leverageTradingInfo["abi"]
    };
    
    const BtcDownPrice = await Moralis.executeFunction(readOptionsBtcDownPrice);
    return BtcDownPrice.toNumber();
}


export {getBtcUpPrice, getBtcDownPrice};