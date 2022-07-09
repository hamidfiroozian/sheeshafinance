import { BigNumberish } from "ethers";

export interface StakePageStore {
  balance: BigNumberish;
  allowance: BigNumberish;
  stakedAmount: BigNumberish;
}
