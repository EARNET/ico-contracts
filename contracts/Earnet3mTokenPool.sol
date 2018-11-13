pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Earnet3mTokenPool is Ownable {
    using SafeMath for uint;

    ERC20 token;
    uint256 public releaseTime;
    bool public locked;
    address[] depositAgents;

    mapping (address => uint) public depositToken;

    mapping (address => bool) public manager;

    constructor(ERC20 _token) public {
        token = _token;
        locked = true;
        depositToken[msg.sender] = 0;
        manager[msg.sender] = true;
    }

    function deposit(address _beneficiary, uint amount) public onlyManager {
        require(_beneficiary != address(0x0));
        require(amount > 0);
        bool k = false;
        for (uint256 i = 0; i < depositAgents.length; i++) {
            if(depositAgents[i] == _beneficiary) {
                k = true;
                break;
            }
        }
        if(k == true) {
            depositToken[_beneficiary] = depositToken[_beneficiary].add(amount);
        }else{
            depositAgents.push(_beneficiary);
            depositToken[_beneficiary] = amount;
        }

    }

    function contributable(address _beneficiary) public view returns(uint) {
        return depositToken[_beneficiary];
    }

    function checkdeposit() public onlyManager view returns(uint) {
        uint256 total = 0;
        for (uint256 i = 0; i < depositAgents.length; i++) {
            total = total.add(depositToken[depositAgents[i]]);
        }
        return total;
    }

    function withdraw(address _beneficiary, address _wallet) public onlyOwner {
        require(_beneficiary != address(0x0));
        require(_wallet != address(0x0));

        token.transfer(_wallet, depositToken[_beneficiary]);
        depositToken[_beneficiary] = 0;
    }

    function unlock() public onlyOwner {
        require(locked == true);
        for (uint256 i = 0; i < depositAgents.length; i++) {
            token.transfer(depositAgents[i], depositToken[depositAgents[i]]);
        }
        locked = false;
    }

    function managerble(address _beneficiary) public onlyOwner {
        require(_beneficiary != address(0x0));
        if(manager[_beneficiary] == false) {
            manager[_beneficiary] = true;
        }else{
            manager[_beneficiary] = false;
        }
    }

    modifier onlyManager() {
        require(manager[msg.sender] == true);
        _;
    }

}
