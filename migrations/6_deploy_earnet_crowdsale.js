var Token = artifacts.require('./EarnetToken.sol');
var Crowdsale = artifacts.require('./EarnetCrowdsale.sol');
var Crowdsale1 = artifacts.require('./Earnet1mCrowdsale.sol');
var Crowdsale3 = artifacts.require('./Earnet3mCrowdsale.sol');
var Crowdsale6 = artifacts.require('./Earnet6mCrowdsale.sol');
var TokenPool = artifacts.require('./EarnetTokenPool.sol');
var TokenPool3 = artifacts.require('./Earnet3mTokenPool.sol');
var TokenPool6 = artifacts.require('./Earnet6mTokenPool.sol');
var Whitelist = artifacts.require('./EarnetWhitelist.sol');
var configData = require('../config/EarnetCrowdsale.js');

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + configData.startTime;
  const endTime = configData.endTime;
  const rate = new web3.BigNumber(configData.rate);
  const rate1 = new web3.BigNumber(configData.rate).add(Math.floor( configData.rate * configData.lockupbonus1 / 100));
  const rate3 = new web3.BigNumber(configData.rate).add(Math.floor( configData.rate * configData.lockupbonus3 / 100));
  const rate6 = new web3.BigNumber(configData.rate).add(Math.floor( configData.rate * configData.lockupbonus6 / 100));
  const wallet = configData.wallet;
  deployer.deploy(Crowdsale, startTime, endTime, rate, wallet, null, Whitelist.address, Token.address).then(function(){
      Crowdsale.at(Crowdsale.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Crowdsale.at(Crowdsale.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Crowdsale.at(Crowdsale.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });

  deployer.deploy(Crowdsale1, startTime, endTime, rate1, wallet, TokenPool.address, Whitelist.address, Token.address).then(function(){
      Crowdsale1.at(Crowdsale1.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Crowdsale1.at(Crowdsale1.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Crowdsale1.at(Crowdsale1.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });

  deployer.deploy(Crowdsale3, startTime, endTime, rate3, wallet, TokenPool3.address, Whitelist.address, Token.address).then(function(){
      Crowdsale3.at(Crowdsale3.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Crowdsale3.at(Crowdsale3.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Crowdsale3.at(Crowdsale3.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });

  deployer.deploy(Crowdsale6, startTime, endTime, rate6, wallet, TokenPool6.address, Whitelist.address, Token.address).then(function(){
      Crowdsale6.at(Crowdsale6.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Crowdsale6.at(Crowdsale6.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Crowdsale6.at(Crowdsale6.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });
};
