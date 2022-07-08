import staking from "../chain/artifacts/contracts/StakeContract.sol/StakeContract.json";
import { stakingAddress } from "../config";
import type { StakeContract } from "../chain/typechain/contracts/StakeContract";
import useContract from "./useContract";

export default function useStakingContract() {
  return useContract<StakeContract>(stakingAddress, staking.abi);
}
