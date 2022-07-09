import { BigNumberish } from "@ethersproject/bignumber";
import { StakeContract } from "../chain/typechain/contracts/StakeContract";
import { tokenAddress } from "../config";
import { ethers } from "ethers";

export const stakeTokens = async (
  mwStaking: StakeContract,
  stakeAmount: BigNumberish
) => {
  try {
    console.log(stakeAmount);
    stakeAmount = ethers.utils.parseUnits(
      stakeAmount.toString(),
      process.env.NEXT_PUBLIC_APP_UNIT
    );

    const req = await mwStaking.invest(stakeAmount);
    const res = await req.wait();
  } catch (e) {
    console.log(e);
  }
};

export const balanceOf = async (mwStaking: StakeContract, add: string) => {
  try {
    const req = await mwStaking.balanceOf(add);
    const amountInUnit = ethers.utils.formatUnits(
      req,
      process.env.NEXT_PUBLIC_APP_UNIT
    );
    return amountInUnit;
  } catch (e) {
    console.log(e);
  }
};

export const unstakeTokens = async (
  mwStaking: StakeContract,
  amount: BigNumberish
) => {
  try {
    console.log(amount);
    amount = ethers.utils.parseUnits(
      amount.toString(),
      process.env.NEXT_PUBLIC_APP_UNIT
    );
    console.log(amount);

    const req = await mwStaking.unStake(amount);
    const res = await req.wait();
  } catch (e) {}
};
