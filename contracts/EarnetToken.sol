pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";

contract EarnetToken is Ownable, MintableToken, BurnableToken {
    string public constant name = "EarnetToken";
    string public constant symbol = "ERN";
    uint8 public constant decimals = 18;

    constructor(uint256 _initialSupply) public {
        totalSupply_ = _initialSupply;
        balances[msg.sender] = _initialSupply;
        Transfer(0x0, msg.sender, _initialSupply);
    }
}
