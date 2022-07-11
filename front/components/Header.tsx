import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import { useState } from "react";
import { NavImage } from "./NavImage";
import useStakingContract from "../hooks/useStakingContract";

export default function Header({ children }: any) {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <header>
        <div className="flex justify-center bg-header w-screen border-b-2 border-black shadow-black shadow-md">
          <div className="flex justify-center self-center sm:w-144 w-full">
            <div className="w-full item-center">
              <div className="flex flex-row  flex-wrap w-full items-center justify-center md:justify-between">
                <div className="bg-blue-500 hover:bg-sky-500 text-white py-2 px-4 rounded-3xl">
                  <Account triedToEagerConnect={triedToEagerConnect} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex justify-center self-center">
          <div className="flex flex-row-reverse pr-0 md:pr-40 lg:pr-44 ">
            <Link href="/stake">
              <a>
                <NavImage name="STAKE" />
              </a>
            </Link>
            <Link href="/transactions">
              <a>
                <NavImage name="Transactions" />
              </a>
            </Link>
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}
