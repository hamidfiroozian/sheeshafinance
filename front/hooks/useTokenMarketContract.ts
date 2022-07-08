import staking from "../chain/artifacts/contracts/TokenMarket.sol/TokenMarket.json";
import { tokenMarketAddress } from "../config";
import type { TokenMarket } from "../chain/typechain/contracts/TokenMarket";
import useContract from "./useContract";

export default function useTokenMarketContract() {
  return useContract<TokenMarket>(tokenMarketAddress, staking.abi);
}
