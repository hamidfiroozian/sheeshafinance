import { BigNumberish } from "ethers";
import { tokenAddress } from "../config";
import { stakingAddress } from "../config";

import type { WSHEA } from "../chain/typechain/contracts/WSHEA";

import { ethers } from "ethers";

export const approve = async (contract: WSHEA, approveAmount: BigNumberish) => {
  try {
    const amount = ethers.utils.parseUnits(approveAmount.toString(), "ether");

    const req = await contract.approve(stakingAddress, amount);
    const res = await req.wait();
    return res;
  } catch (e) {}
};

export const allowance = async (contract: WSHEA, add: string) => {
  try {
    const req = await contract.allowance(add, stakingAddress);
    const amountInUnit = ethers.utils.formatUnits(
      req,
      process.env.NEXT_PUBLIC_APP_UNIT
    );
    return amountInUnit;
  } catch (e) {}
};
export const balanceOf = async (contract: WSHEA, account: string) => {
  try {
    console.log("reqreqreqreqreq e", account);

    const req = await contract.balanceOf(account);
    const amountInUnit = ethers.utils.formatUnits(
      req,
      process.env.NEXT_PUBLIC_APP_UNIT
    );
    return amountInUnit;
  } catch (e) {
    console.log("reqreqreqreqreq e", e);
  }
};
