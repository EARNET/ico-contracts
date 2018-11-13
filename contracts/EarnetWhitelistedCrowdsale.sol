pragma solidity ^0.4.23;

import "./EarnetWhitelist.sol";

contract EarnetWhitelistedCrowdsale {
    EarnetWhitelist whitelist;

    constructor(EarnetWhitelist _whitelist) public {
        require(_whitelist != address(0));
        whitelist = _whitelist;
    }

    modifier isWhitelisted(address _beneficiary) {
        require(whitelist.isWhitelisted(_beneficiary));
        _;
    }
}
