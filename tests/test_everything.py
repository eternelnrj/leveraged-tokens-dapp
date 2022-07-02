import pytest
from brownie import chain, web3, interface, Contract  
import json


abi = json.load(open('build/contracts/LeveragedTrading.json'))["abi"]
contract_address = "0x31f1435779116d0c06797bE1e18899dD445cb1A6"

usdc_address = "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"
btcup_address = "0xc9fC603Fe7E4a2cEcd2ed0856bA352Ec7Bcb24F9"
btcdown_address = "0xe28B6CaEF7de3d64E4d63dAf17A471Fbb5AB5BFC"

@pytest.fixture(scope="module")
def leveraged_trading():
    leveraged_trading = Contract.from_abi("LeverageTrading", contract_address, abi)
    return leveraged_trading

def test_initiate_pool(leveraged_trading):
    usdc = interface.IERC20(usdc_address)
    usdc.approve(leveraged_trading.address, 10000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})
    leveraged_trading.initiatePool(1000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})

    assert leveraged_trading.poolIsInitiated() == True
    assert leveraged_trading.amountBtcUp() == 500000
    assert leveraged_trading.amountBtcDown() == 500000


def test_issue_btcup(leveraged_trading):
    btc_up = interface.IERC20(btcup_address)
    btc_up.approve(leveraged_trading.address, 10000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})

    leveraged_trading.issueBtcUp(1000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})
    assert leveraged_trading.amountBtcUp() > 500000





    #leverageTrading.btcUp.approve("0x582B20222BFE421ead01e4940D1e1223359773c3", 1000000)

#    usdc = web3.eth.contract("0xb7a4F3E9097C08dA09517b5aB877F7a917224ede")
#    usdc.approve.transact(leverageTrading.address, 10000000)

#def test_initiate_pool(leverageTrading):
#    usdc = IERC20(0xb7a4F3E9097C08dA09517b5aB877F7a917224ede)
#    usdc.approve(leverageTrading.address, 10000000)

#     leverageTrading.initiatePool.transact(1000000)

#def test_initiate_pool(leverageTrading):
    #assert leverageTrading.poolIsInitiated() == False