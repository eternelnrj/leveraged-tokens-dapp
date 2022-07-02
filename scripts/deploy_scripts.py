from scripts.helpful_scripts import get_account
from brownie import LeveragedTrading, interface


def main():
    account = get_account(index=None) #index=None for deployment on a public blockchain
    leveraged_trading = LeveragedTrading.deploy({"from": account})

    usdc = interface.IERC20("0xb7a4F3E9097C08dA09517b5aB877F7a917224ede")
    usdc.approve(leveraged_trading.address, 100000000, {"from" : account})
    leveraged_trading.initiatePool(20000000, {"from" : account})
