var Token = artifacts.require('./EarnetToken.sol');
var TokenPool = artifacts.require('./EarnetTokenPool.sol');
var TokenPool3 = artifacts.require('./Earnet3mTokenPool.sol');
var TokenPool6 = artifacts.require('./Earnet6mTokenPool.sol');
var Whitelist = artifacts.require('./EarnetWhitelist.sol');

module.exports = function(deployer, network, accounts) {

    deployer.deploy(TokenPool, Token.address);
    deployer.deploy(TokenPool3, Token.address);
    deployer.deploy(TokenPool6, Token.address);
    deployer.deploy(Whitelist);
};
