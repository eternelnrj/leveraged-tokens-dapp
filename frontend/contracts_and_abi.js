
const leverageTradingInfo = {
    "contractAddress" : "0xab7724612fa346F7407D2B94b865DD3c4AA86771",
    "abi" : require("../build/deployments/42/0xab7724612fa346F7407D2B94b865DD3c4AA86771.json")["abi"]
}

const btcupInfo = { contractAddress : "0x928bb8531CA990c70044b24502667055f17bd767",
                    abi : require("../build/contracts/BTCUP.json")["abi"]};


const btcdownInfo = {contractAddress : "0x2Aa27F9e02FDfCf8C4D5A1aC3967D4D25f62F560",
                    abi : require("../build/contracts/BTCDOWN.json")["abi"]}   



const usdcInfo = { contractAddress : "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


export {leverageTradingInfo, btcupInfo,  btcdownInfo,  usdcInfo};