import { BigNumberish, ethers } from "ethers";
import { TokenMarket } from "../chain/typechain/contracts/TokenMarket";

export const buyTokens = async (
  marketContract: TokenMarket,
  amount: BigNumberish,
  add: string
) => {
  try {
    amount = ethers.utils.parseUnits(
      amount.toString(),
      process.env.NEXT_PUBLIC_APP_UNIT
    );
    const req = await marketContract.transfer(add, amount);
    await req.wait();
  } catch (e) {}
};
