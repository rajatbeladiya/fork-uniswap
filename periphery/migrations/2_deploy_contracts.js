const Router = artifacts.require("UniswapV2Router02");
const WETH = artifacts.require("WETH");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = "0x711e0Ea6aA66f41BE652fB89553664456Ef74941";

  if (network === 'mainnet') {
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);

};
