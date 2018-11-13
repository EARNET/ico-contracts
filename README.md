# EARNET Project
- The ICO contracts of [EARNET project](https://earnet.io/).
- If you have any questions, please connect with us on our social channels.
## Contracts  
1. EarnetToken
    - The contract of the standard token.
1. Earnet1stPresale
    - The contract of the 1st pre sale, non lock up time.
1. Earnet1st1mPresale
    - The contract of the 1st pre sale, lock up for one month from the exchange listing.
1. Earnet1st3mPresale
    - The contract of the 1st pre sale, lock up for three months from the exchange listing.
1. Earnet1st6mPresale
    - The contract of the 1st pre sale, lock up for six months from the exchange listing.
1. Earnet2ndPresale
    - The contract of the 2nd pre sale, non lock up time.
1. Earnet2nd1mPresale
    - The contract of the 2nd pre sale, lock up for one month from the exchange listing.
1. Earnet2nd3mPresale
    - The contract of the 2nd pre sale, lock up for three months from the exchange listing.
1. Earnet2nd6mPresale
    - The contract of the 2nd pre sale, lock up for six months from the exchange listing.
1. EarnetCrowdsale
    - The contract of the crowd sale, non lock up time.
1. Earnet1mCrowdsale
    - The contract of the crowd sale, lock up for one month from the exchange listing.
1. Earnet3mCrowdsale
    - The contract of the crowd sale, lock up for three months from the exchange listing.
1. Earnet6mCrowdsale
    - The contract of the crowd sale, lock up for six months from the exchange listing.
1. EarnetTokwnPool
    - The contract of the lock up token for one month.
1. Earnet3mTokwnPool
    - The contract of the lock up token for three months.
1. Earnet6mTokwnPool
    - The contract of the lock up token for six months.
1. EarnetWhitelist
    - The contract that records whitelist into the storage.
1. EarnetWhitelistedCrowdsale
    - The contract which extends in the sale contract in order to use the whitelist.

### Methods  
- EarnetToken  

| ID | Name | Scope | param | return value | Note |
----|----|----|----|----|----
| 1 | name | public | - | - | ERC20 |
| 2 | symbol | public | - | - | ERC20 |
| 3 | decimals | public | - | - | ERC20 |
| 4 | totalSupply | public |- | int | ERC20 |
| 5 | balanceOf | public | address | int | ERC20 |
| 6 | transfer | public | to_address, int | bool | ERC20 |
| 7 | transferFrom | public | to_address, from_adress, int | bool | ERC20 |
| 8 | approve | public | - | - | ERC20 |
| 9 | allowance | public | - | - | ERC20 |
| 10 | mint | public | - | - | Zeppelin-solidity |
| 11 | burn | public | - | - | Zeppelin-solidity |

- Earnet1stPresale, Earnet1st1mPresale, Earnet1st3mPresale, Earnet1st6mPresale, Earnet2ndPresale, Earnet2nd1mPresale, Earnet2nd3mPresale, Earnet2nd6mPresale, EarnetCrowdsale, Earnet1mCrowdsale, Earnet3mCrowdsale, Earnet6mCrowdsale

| ID | Name | Scope | param | return value | Note |
----|----|----|----|----|----
| 1 | crowdsale | public | - | - |  |
| 2 | buyTokens | public | address | int |  |
| 3 | pause | public | - | - | Zeppelin-solidity |
| 4 | unpause | public | - | - | Zeppelin-solidity |
| 5 | hasClosed | public | - | bool | Zeppelin-solidity |
| 6 | setVolume | external | _weiAmount, _rate |  |  |

- EarnetTokenPool, Earnet3mTokenPool, Earnet6mTokenPool,

| ID | Name | Scope | param | return value | Note |
----|----|----|----|----|----
| 1 | deposit | public | address, amount | bool |  |
| 2 | contributable | public | address | bool |  |
| 3 | checkdeposit | public |  | bool |  |
| 4 | withdraw | public | address, wallet | bool |  |
| 5 | unlock | public |  |  |  |
| 6 | managerble | public | address |  |  |

- EarnetWhitelist

| ID | Name | Scope | param | return value | Note |
----|----|----|----|----|----
| 1 | addToWhitelist | public | address |  |  |
| 2 | addManyToWhitelist | public | address |  |  |
| 3 | removeFromWhitelist | public | address |  |  |
| 4 | removeManyFromWhitelist | public | address |  |  |
| 5 | isWhitelisted | public | address | bool |  |

---
## Prerequisite

### Language  
- solidity 0.4.23    
### Framework  
- truffle 4.1.1  
### Library  
- zeppelin-solidity 1.9.0  
### Package manager  
- npm 6.1.0  
### Test tool  
- ropsten  
- ganache 1.1.0-beta.0  
### Ethereum client  
- Geth 1.8.3  
### Version manager  
- Github  
---
## License
- [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.txt)
---
## Code audit
- Code audit company
    - Tecotec Co.Ltd
- Code audit date
    - ** Nov, 2018
    - [Earnet ICO Contract Code Audit Report](https://earnet.io/)
