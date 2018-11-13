pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract EarnetWhitelist is Ownable {

    mapping (address => bool) public whitelist;

    constructor() public {
        whitelist[msg.sender] = true;
    }

    function addToWhitelist(address _beneficiary) public onlyOwner {
        require(_beneficiary != address(0x0));
        whitelist[_beneficiary] = true;
    }

    function addManyToWhitelist(address[] _beneficiaries) public onlyOwner {
        for (uint i = 0; i < _beneficiaries.length; i++) {
            whitelist[_beneficiaries[i]] = true;
        }
    }

    function removeFromWhitelist(address _beneficiary) public onlyOwner {
        require(_beneficiary != address(0x0));
        delete whitelist[_beneficiary];
    }

    function removeManyFromWhitelist(address[] _beneficiaries) public onlyOwner {
        for (uint i = 0; i < _beneficiaries.length; i++) {
            delete whitelist[_beneficiaries[i]];
        }
    }

    function isWhitelisted(address _beneficiary) public view returns (bool) {
        require(_beneficiary != address(0x0));
        return whitelist[_beneficiary];
    }
}
