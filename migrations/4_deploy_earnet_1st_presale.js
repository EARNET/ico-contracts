var Token = artifacts.require('./EarnetToken.sol');
var PreSale = artifacts.require('./Earnet1stPresale.sol');
var Pre1Sale = artifacts.require('./Earnet1st1mPresale.sol');
var Pre3Sale = artifacts.require('./Earnet1st3mPresale.sol');
var Pre6Sale = artifacts.require('./Earnet1st6mPresale.sol');
var TokenPool = artifacts.require('./EarnetTokenPool.sol');
var TokenPool3 = artifacts.require('./Earnet3mTokenPool.sol');
var TokenPool6 = artifacts.require('./Earnet6mTokenPool.sol');
var Whitelist = artifacts.require('./EarnetWhitelist.sol');
var configData = require('../config/EarnetCrowdsale.js');

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + configData.startTime;
  const endTime = configData.endTime;
  const prebonus = Math.floor( configData.rate * configData.presale1 / 100);
  const rate = new web3.BigNumber(configData.rate).add(prebonus);
  const rate1 = new web3.BigNumber(configData.rate).add(prebonus).add(Math.floor( configData.rate * configData.lockupbonus1 / 100));
  const rate3 = new web3.BigNumber(configData.rate).add(prebonus).add(Math.floor( configData.rate * configData.lockupbonus3 / 100));
  const rate6 = new web3.BigNumber(configData.rate).add(prebonus).add(Math.floor( configData.rate * configData.lockupbonus6 / 100));
  const wallet = configData.wallet;
  deployer.deploy(PreSale, startTime, endTime, rate, wallet, null, Whitelist.address, Token.address).then(function() {
      PreSale.at(PreSale.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      PreSale.at(PreSale.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      PreSale.at(PreSale.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });

  deployer.deploy(Pre1Sale, startTime, endTime, rate1, wallet, TokenPool.address, Whitelist.address, Token.address).then(function(){
      Pre1Sale.at(Pre1Sale.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Pre1Sale.at(Pre1Sale.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Pre1Sale.at(Pre1Sale.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });

  deployer.deploy(Pre3Sale, startTime, endTime, rate3, wallet, TokenPool3.address, Whitelist.address, Token.address).then(function(){
      Pre3Sale.at(Pre3Sale.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Pre3Sale.at(Pre3Sale.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Pre3Sale.at(Pre3Sale.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });

  deployer.deploy(Pre6Sale, startTime, endTime, rate6, wallet, TokenPool6.address, Whitelist.address, Token.address).then(function(){
      Pre6Sale.at(Pre6Sale.address).setVolume(web3.toWei(configData.ethvolume3,"ether"),configData.volumeBonus3);
      Pre6Sale.at(Pre6Sale.address).setVolume(web3.toWei(configData.ethvolume2,"ether"),configData.volumeBonus2);
      Pre6Sale.at(Pre6Sale.address).setVolume(web3.toWei(configData.ethvolume1,"ether"),configData.volumeBonus1);
  });
};
