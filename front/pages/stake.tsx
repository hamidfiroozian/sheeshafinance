import { Card } from "../components/Card";

import { Fragment, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { BigNumberish } from "ethers";
import useStakingContract from "../hooks/useStakingContract";
import useTokenContract from "../hooks/useTokenContract";
import {
  stakeTokens,
  unstakeTokens,
  balanceOf as getBalanceOfStaked,
} from "./../hooks/useStaking";
import {
  allowance as allowanceToken,
  approve as approveToken,
  balanceOf as balanceOfToken,
} from "./../hooks/useWtoken";
import { buyTokens } from "../hooks/useMarket";
import useTokenMarketContract from "../hooks/useTokenMarketContract";
import { Subject } from "rxjs";
import { stakePageStore } from "../rx_store/store";
import { StakePageStore } from "../rx_store/stake_poage.interface";

export default function stake() {
  const { account } = useWeb3React();
  const [stakeAmount, setStakeAmount] = useState<BigNumberish>(0);
  const [chargeAmount, setChargeAmount] = useState<BigNumberish>(0);
  const [unStakeAmount, setUnStakeAmount] = useState<BigNumberish>(0);
  const stakingContract = useStakingContract();
  const tokenContract = useTokenContract();
  const tokenMarketContract = useTokenMarketContract();
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  const getBalanceSubject = new Subject();
  const getStakedAmountSubject = new Subject();
  const getAllowanceSubject = new Subject();

  const [stakeState, setStakeState] = useState(stakePageStore.initialState);

  useEffect(() => {
    stakePageStore.subscribe(setStakeState);
    stakePageStore.init();
  }, []);

  useEffect(() => {
    if (account) {
      getAccountInfo();
      setIsWalletConnected(true);
    } else {
      setIsWalletConnected(false);
    }
  }, [account]);

  const getAccountInfo = () => {
    getBalance();
    getAllowance();
    getStakedAmount();
  };

  const getBalance = () => {
    balanceOfToken(tokenContract!, account!)
      .then((res) => {
        const messageObject: Partial<StakePageStore> = {
          balance: res,
        };
        stakePageStore.sendMessage(messageObject);
      })
      .catch((e) => {});
  };

  const getStakedAmount = () => {
    getBalanceOfStaked(stakingContract!, account!)
      .then((res) => {
        const messageObject: Partial<StakePageStore> = {
          stakedAmount: res,
        };
        stakePageStore.sendMessage(messageObject);
      })
      .catch((e) => {
        getStakedAmountSubject.error(e);
      });
  };

  const getAllowance = () => {
    allowanceToken(tokenContract!, account!)
      .then((res) => {
        const messageObject: Partial<StakePageStore> = {
          allowance: res,
        };
        stakePageStore.sendMessage(messageObject);
      })
      .catch((e) => {
        getAllowanceSubject.error(e);
      });
  };
  const handleButtonClick = async () => {
    await stakeTokens(stakingContract!, stakeAmount);
    getAccountInfo();
  };

  const handleApproveButtonClick = async () => {
    await approveToken(tokenContract!, stakeAmount);
    getAccountInfo();
  };

  const handleChargeButtonClick = async () => {
    const r = await buyTokens(tokenMarketContract!, chargeAmount, account!);

    getAccountInfo();
  };

  const handleunStakeButtonClick = async () => {
    await unstakeTokens(stakingContract!, unStakeAmount);
    getAccountInfo();
  };

  if (!isWalletConnected) {
    return <div>Please Connect Wallet to Hardhat</div>;
  }
  return (
    <Fragment>
      <Card>
        <div className="flex-1">
          <div>
            <label htmlFor="charge_balance">Charge Balance</label>

            <input
              type="number"
              id="charge_balance"
              className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
              placeholder="enter amount"
              min={0}
              // max={parseBalance(data ?? 0)}
              onChange={(e) => {
                e.preventDefault();

                setChargeAmount(e.target.value as BigNumberish);
              }}
              required
            />
            <button
              type="button"
              className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
              aria-label="Pick a date"
              onClick={handleChargeButtonClick}
            >
              Charge
            </button>
          </div>

          <label htmlFor="stake">your balance</label>

          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="SHEA balance"
            min={0}
            value={stakeState.balance.toString()}
            readOnly
          />
          <br />
          <br />

          <div>
            firs you need to approve then you can stake
            <br />
            {`your allowance amount is ${stakeState.allowance} , so you can stake ${stakeState.allowance} ${process.env.NEXT_PUBLIC_APP_UNIT} in max `}
          </div>
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="stake amount"
            min={0}
            // max={parseBalance(data ?? 0)}
            onChange={(e) => {
              e.preventDefault();

              setStakeAmount(e.target.value as BigNumberish);
            }}
            required
          />

          <div>
            {stakeState.allowance == 0 ? (
              <button
                type="button"
                className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
                aria-label="Pick a date"
                onClick={handleApproveButtonClick}
              >
                Approve
              </button>
            ) : (
              <button
                type="button"
                className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
                aria-label="Pick a date"
                onClick={handleButtonClick}
              >
                Stake
              </button>
            )}
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex-1">
          <div>
            {`your staked amount is ${stakeState.stakedAmount} , so you can unstake ${stakeState.stakedAmount} ${process.env.NEXT_PUBLIC_APP_UNIT} in max `}
          </div>
          <input
            type="number"
            id="stake"
            className=" text-center p-1 block w-full h-10 border-2 border-black dark:bg-white"
            placeholder="unstake"
            min={0}
            // max={parseBalance(data ?? 0)}
            onChange={(e) => {
              e.preventDefault();

              setUnStakeAmount(e.target.value as BigNumberish);
            }}
            required
          />

          <button
            type="button"
            className="pa2  button-reset ba border-2 border-black  pr-1 pl-1"
            aria-label="Pick a date"
            onClick={handleunStakeButtonClick}
          >
            unStake
          </button>
        </div>
      </Card>
    </Fragment>
  );
}
