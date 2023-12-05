// get the price of a cryptocurrency using the FTSO system 
// Flare Time Series Oracle is a smart contract running on the network that provides continous estimations for different types of data - decentralised and securely
// decentralised system = set of independent data providers (centralised and decentralised)
// The Flare periphery packages simplify working with the Flare API

// available pairs
// $ADA, $ALGO, $ARB, $AVAX, $BNB, $BTC, $DOGE, $ETH, $FIL, $FLR, $LTC, $MATIC, $SOL, $USDC, $USDT, $XDC, $XLM, and $XRP. 
// code comes from https://docs.flare.network/dev/tutorials/ftso/getting-data-feeds/
const flareRPC = "https://flare-api.flare.network/ext/C/rpc";
const supportedPairs = ["ADA", "ALGO", "ARB", "AVAX", "BNB", "BTC", "DOGE", "ETH", "FIL", "FLR", "LTC", "MATIC", "SOL", "USD", "USDT", "XDC", "XLM", "XRP"];
async function getCryptoPriceFlare(cryptocurrency){
    // if the argument is not in the supported pairs throw an error - res.status(500) - send an error
    ethers = await import("ethers");
    // this package simplifies working with the Flare API to make calls to the smart contract that aggregates working with the smart contract
    flare = await import("@flarenetwork/flare-periphery-contract-artifacts");

    // JSON RPC PROVIDER is a popular api method for interacting with a smart contract
    const provider = new ethers.JsonRpcProvider(flareRPC);

    // accessing the contract registry
    const flareContractRegistry = new ethers.Contract("0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019", flare.nameToAbi("FlareContractRegistry", "flare").data, provider);

    // retrieve the FTSO registry
    const ftsoRegistryAddr = await flareContractRegistry.getContractAddressByName("FtsoRegistry");
    const ftsoRegistry = new ethers.Contract(ftsoRegistryAddr, flare.nameToAbi("FtsoRegistry", "flare").data, provider);

    // get the latest cryptoprice
    const [_price, _timestamp, _decimals] = await ftsoRegistry["getCurrentPriceWithDecimals(string)"](cryptocurrency);

    // console.log(`${Number(_price) / Math.pow(10, Number(_decimals))} USD`);
    // console.log(`Calculated at ${new Date(Number(_timestamp) * 1000)}`);

    return _price;
}

module.exports = getCryptoPriceFlare;