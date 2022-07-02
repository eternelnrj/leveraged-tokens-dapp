
const leverageTradingInfo = {
    "contractAddress" : "0xC27413247A150ae7D77f00C79e215AB1D3DE1956",
    "abi" : require("../build/deployments/42/0xC27413247A150ae7D77f00C79e215AB1D3DE1956.json")["abi"]
}

const btcupInfo = { contractAddress : "0x257B106fcd747988F038E329797B6bE9b3182e34",
                    abi : require("../build/contracts/BTCUP.json")["abi"]};


const btcdownInfo = {contractAddress : "0x539704979542ca370D920f6BA9a004578953DF29",
                    abi : require("../build/contracts/BTCDOWN.json")["abi"]}   



const usdcInfo = { contractAddress : "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


export {leverageTradingInfo, btcupInfo,  btcdownInfo,  usdcInfo};