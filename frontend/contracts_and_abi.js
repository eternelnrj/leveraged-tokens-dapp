
//"0x1bAA6AC0073e1C5A9C12e8A3856EA87560f0A636",
const leveragedTradingInfo = {
    "contractAddress" : "0x00CB04b945354d3c34A22246633f490705620bfb",      
    "abi" : require("../build/deployments/42/0x00CB04b945354d3c34A22246633f490705620bfb.json")["abi"]
};

const btcupInfo = { contractAddress : "0x7C4a5a1A20Fa8dfedDf4d13e16F45f0E8612d0EE",
                    abi : require("../build/contracts/BTCUP.json")["abi"]};


const btcdownInfo = {contractAddress : "0x2CE25b47f33B84c6876c2936472FCBDE98bf8025",
                    abi : require("../build/contracts/BTCDOWN.json")["abi"]};


const usdcInfo = { contractAddress : "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
                    abi : require("../build/contracts/IERC20.json")["abi"]};


export {leveragedTradingInfo, btcupInfo,  btcdownInfo,  usdcInfo};