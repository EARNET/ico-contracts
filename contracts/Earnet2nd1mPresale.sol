pragma solidity ^0.4.23;
import "zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/emission/AllowanceCrowdsale.sol";
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "./EarnetToken.sol";
import "./EarnetTokenPool.sol";
import "./EarnetWhitelist.sol";
import "./EarnetWhitelistedCrowdsale.sol";
contract Earnet2nd1mPresale is Pausable, TimedCrowdsale, EarnetWhitelistedCrowdsale, AllowanceCrowdsale {
    struct Volumes {
        uint256 limit;
        uint256 rate;
    }

    Volumes[] private _volumeis;
    EarnetTokenPool walletpool;

    constructor(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet, EarnetTokenPool _pooler, EarnetWhitelist _whitelist, StandardToken _token)
        public
        Crowdsale(_rate, _wallet, _token)
        TimedCrowdsale(_startTime, _endTime)
        EarnetWhitelistedCrowdsale(_whitelist)
        Pausable()
        AllowanceCrowdsale(_wallet)
    {
        walletpool = _pooler;
    }

    function buyTokens(address _beneficiary) public payable isWhitelisted(_beneficiary) {
        require(!paused);

        uint256 weiAmount = msg.value;
        _preValidatePurchase(_beneficiary, weiAmount);

        uint256 tokens = getTokenAmount(weiAmount);
        weiRaised = weiRaised.add(weiAmount);

        _processPurchase(_beneficiary, tokens);
        emit TokenPurchase(
            msg.sender,
            _beneficiary,
            weiAmount,
            tokens
        );

        _updatePurchasingState(_beneficiary, weiAmount);

        _forwardFunds();
        _postValidatePurchase(_beneficiary, weiAmount);

    }

    function _processPurchase(address _beneficiary, uint256 _tokenAmount) internal {
        if(walletpool != address(0x0)) {
            token.transferFrom(tokenWallet, walletpool, _tokenAmount);
            walletpool.deposit(_beneficiary, _tokenAmount);
        }else{
            _deliverTokens(_beneficiary, _tokenAmount);
        }
    }

    function getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
        uint256 tokenAmount = _weiAmount.mul(rate);
        uint256 tokensBonus = _getVolumeAmount(_weiAmount, tokenAmount);
        return tokenAmount.add(tokensBonus);
    }

    function _getVolumeAmount(uint256 _weiAmount, uint256 _tokenAmount) internal constant returns (uint256){
        if(_volumeis.length == 0) {
            return 0;
        }
        for(uint256 i = 0; i < _volumeis.length; i++) {
            if(_weiAmount >= _volumeis[i].limit) {
                return _tokenAmount.div(100).mul(_volumeis[i].rate);
            }
        }
        return 0;
    }

    function setVolume(uint256 _weiAmount, uint256 _rate) external onlyOwner {
        require(_weiAmount > 0);
        require(_rate >= 0);

        _volumeis.push(Volumes(
                _weiAmount,
                _rate
            ));
    }
}
