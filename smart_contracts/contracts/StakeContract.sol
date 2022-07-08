// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakeContract {
    IERC20 public _WSHEA;
    mapping(address => uint256) public investors;

    constructor(address tokenAddress) {
        _WSHEA = IERC20(tokenAddress);
    }

    function invest(uint256 amount) public payable {
        require(amount > 0, "You need to send at least some tokens");
        address from = msg.sender;
        _WSHEA.transferFrom(from, address(this), amount);
        investors[from] = investors[from] + amount;
    }

    function balanceOf(address account) public view returns (uint256) {
        return investors[account];
    }

    function unStake(uint256 amount) public payable {
        require(investors[msg.sender] > 0, "You dont have any staked amount");
        require(
            investors[msg.sender] >= amount,
            "You cant unstake more than stake amount"
        );
        investors[msg.sender] = investors[msg.sender] - amount;

        _WSHEA.transfer(msg.sender, amount);
    }
}
