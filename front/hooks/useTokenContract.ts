import token from "../chain/artifacts/contracts/WSHEA.sol/WSHEA.json";
import { tokenAddress } from "../config";
import type { WSHEA } from "../chain/typechain/WSHEA";
import useContract from "./useContract";

export default function useTokenContract() {
  return useContract<WSHEA>(tokenAddress, token.abi);
}
