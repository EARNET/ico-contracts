const Token = artifacts.require('./EarnetToken.sol');
var configData = require('../config/EarnetToken.js');

module.exports = function(deployer) {
  const INITIAL_SUPPLY = configData.totalSupply;
  deployer.deploy(Token, INITIAL_SUPPLY);
}
