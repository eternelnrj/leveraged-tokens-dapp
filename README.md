### Warning
This application was built for learning and fun only, and is not suitable for production.

#### Decentralized leveraged trading App.
A simple application that allows to long or short BTC with leverage. To bet on the BTC price increase, the user buys BTCUP, while a bet on the BTC price decrease corresponds to a purchase of BTCDOWN. The leverage is upper bounded by 3 and has a variable size, which depends on collateral amounts for BTCUP and BTCDOWN tokens. For a fixed price increase in %, the leverage for BTCUP holders is maximum when the amount of collateral for BTCUP is at most the amount of collateral for BTCDOWN, and symmetrically for BTCDOWN holders. When the price of BTC goes up, collaterals are rebalanced so that the amount of collateral for BTCDOWN decreases and the amount of collateral for BTCUP increases, and symetrically if BTC goes down. 

This is a TOY version, because collaterals are rebalanced only when a user issues/redeems leveraged tokens. In practice, one expects BTCUP/BTCDOWN prices change along with BTC price, so collaterals should be regularly rebalanced. Another problem is the price update policy of Chainlink. A price update occurs 1 hour after last update or when the price moves more than the deviation threshold of 0.5%, so the price increase/decrease from the chainlink feed is predictable. This dapp is inspired from leveraged tokens on Waves blockchain, see `https://levex.fi/`.

#### Launch.
One needs to create an account on `https://moralis.io/` and create a new dapp with `Kovan` testnet enabled. Use the
server url and app id of the moralis dapp to create a `.config.json` file with content
`{"serverUrl" : "YOUR_URL", "appId" : "YOUR_APP_ID"}` inside the frontend folder. You can now launch the dapp from
frontend folder with the command http-server.


#### Modifications
To deploy a modified version of the Smart Contract with brownie you need to:

1. Add `.env` file containing `export PRIVATE_KEY=YOUR_PRIVATE_KEY export WEB3_INFURA_PROJECT_ID=YOUR_INFURA_PROJECT_ID`;

2. modify the source code `LeveragedTrading.sol` file in the contracts folder;

3. `brownie compile` in the `project` folder;

4. `brownie run ./scripts/deploy_scripts.py" --network kovan`

5. Update `contracts_and_abi.js` in the `frontend` folder.

#### Testing
You can test the contract on a local blockchain with `ganache` by unlocking an account, which has some Kovan USDC.
1. `ganache-cli --fork https://kovan.infura.io/v3/YOUR_INFURA_PROJECT_ID --unlock ACCOUNT -p BROWNIE_PORT`;
2. `brownie test` in the project folder.
