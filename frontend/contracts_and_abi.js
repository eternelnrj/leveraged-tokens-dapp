
const leveragedTradingInfo = {
    "contractAddress" : "0x1bAA6AC0073e1C5A9C12e8A3856EA87560f0A636",
    "abi" : require("../build/deployments/42/0x1bAA6AC0073e1C5A9C12e8A3856EA87560f0A636.json")["abi"]
}

const btcupInfo = { contractAddress : "0x8c73270B7d3A29448bD40dE773956dA352733082",
                    abi : require("../build/contracts/BTCUP.json")["abi"]};


const btcdownInfo = {contractAddress : "0xDB111Bd8E5A3cD6265Ef7B6bbA415fFE65f73923",
                    abi : require("../build/contracts/BTCDOWN.json")["abi"]}   



const usdcInfo = { contractAddress : "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


export {leveragedTradingInfo, btcupInfo,  btcdownInfo,  usdcInfo};