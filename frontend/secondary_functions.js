const BigNumber = require('bignumber.js');

function getBigNumberWithDecimals(x, numberDecimals) {
    let xAsBigNumber = new BigNumber(x);
    let yAsBigNumberWithDecimals = new BigNumber("1".concat("0".repeat(numberDecimals) ));
    
    return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
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


export {getBigNumberWithDecimals, approve};