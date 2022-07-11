import { Observer, Subject } from "rxjs";
import { StakePageStore } from "./stake_poage.interface";
import { TransactionsHistory } from "./transaction_history.interface";

const subject = new Subject();
const subjectTXs = new Subject();

const initialState = {
  balance: 0,
  allowance: 0,
  stakedAmount: 0,
};

let stakePageState: StakePageStore = initialState;

export const stakePageStore: any = {
  init: () => subject.next(stakePageState),
  subscribe: (setState: Partial<Observer<unknown>> | undefined) =>
    subject.subscribe(setState),
  sendMessage: (message: Partial<StakePageStore>) => {
    console.log(message);
    stakePageState = { ...stakePageState, ...message };
    subject.next(stakePageState);
  },
};

const initialTXState: TransactionsHistory[] = [];

let stateTX: TransactionsHistory[] = initialTXState;

export const transactionsStore: any = {
  init: () => subjectTXs.next(stateTX),
  subscribe: (setState: Partial<Observer<unknown>> | undefined) =>
    subjectTXs.subscribe(setState),
  sendMessage: (message: TransactionsHistory[]) => {
    console.log(message);
    stateTX = [...stateTX, ...message];
    subjectTXs.next(stateTX);
  },
};
