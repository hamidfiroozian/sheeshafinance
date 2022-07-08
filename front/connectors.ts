import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: process.env.NEXT_PUBLIC_CHAINS.split(",").map(Number), //TODO check available newtorks that Dapp deployed on them
});

// export const injected = new InjectedConnector({});
