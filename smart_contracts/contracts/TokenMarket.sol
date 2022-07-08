// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

contract TokenMarket {
    IERC20 public _WSHEA;
    address _owner;

    constructor(address tokenAddress,address owner) {
        _WSHEA = IERC20(tokenAddress);
        _owner = owner;
    }

    function transfer(address add, uint256 amount) public payable {
        require(amount > 0, "You need to send at least some tokens");
        _WSHEA.transferFrom(_owner, add, amount);
    }
}
