import pytest
from brownie import accounts, LeverageTrading, BTCUP, chain, web3, interface, Contract

import brownie
  
import json
  
# Opening JSON file
f = open('/home/alex/Documents/PORTFOLIO/Dapps/Leverage_tokens/brownie_leverage_tokens/build/contracts/LeverageTrading.json')
  
# returns JSON object as 
# a dictionary
abi = json.load(f)["abi"]


@pytest.fixture(scope="module")
def leverageTrading(LeverageTrading):
    return LeverageTrading.deploy({"from": "0x582B20222BFE421ead01e4940D1e1223359773c3"})

def test_initiate_pool(leverageTrading):
    usdc = interface.IERC20("0xb7a4F3E9097C08dA09517b5aB877F7a917224ede")
    usdc.approve(leverageTrading.address, 100000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})
    leverageTrading.initiatePool(1000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})

    assert leverageTrading.poolIsInitiated() == True
    assert leverageTrading.amountBtcUp() == 1000000
    assert leverageTrading.amountBtcDown() == 1000000


def test_issue_btcup(leverageTrading):
    leverageTrading.issueBtcUp(1000000, {"from" : "0x582B20222BFE421ead01e4940D1e1223359773c3"})
    lv = Contract.from_abi("LeverageTrading", "0x46812881b66B476DEC737A6AC75886dE896E505A", abi)
    assert lv.amountBtcUp() == 0
    #leverageTrading.btcUp.approve("0x582B20222BFE421ead01e4940D1e1223359773c3", 1000000)

#    usdc = web3.eth.contract("0xb7a4F3E9097C08dA09517b5aB877F7a917224ede")
#    usdc.approve.transact(leverageTrading.address, 10000000)

#def test_initiate_pool(leverageTrading):
#    usdc = IERC20(0xb7a4F3E9097C08dA09517b5aB877F7a917224ede)
#    usdc.approve(leverageTrading.address, 10000000)

#     leverageTrading.initiatePool.transact(1000000)

#def test_initiate_pool(leverageTrading):
    #assert leverageTrading.poolIsInitiated() == False