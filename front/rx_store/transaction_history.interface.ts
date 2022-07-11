import { BigNumberish } from "ethers";

export interface TransactionsHistory {
  event: string;
  amount: BigNumberish;
  address: BigNumberish;
  tx_id: number;
}
