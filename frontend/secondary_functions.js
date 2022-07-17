const BigNumber = require('bignumber.js');

function getBigNumberWithDecimals(x, numberDecimals) {
    const xAsBigNumber = new BigNumber(x.toFixed(numberDecimals));
    const ScalingFactorAsBigNumber = new BigNumber("1".concat("0".repeat(numberDecimals) ));
    
    return xAsBigNumber.multipliedBy(ScalingFactorAsBigNumber);
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