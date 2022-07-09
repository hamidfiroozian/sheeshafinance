import { Observer, Subject } from "rxjs";
import { StakePageStore } from "./stake_poage.interface";

const subject = new Subject();

const initialState = {
  balance: 0,
  allowance: 0,
  stakedAmount: 0,
};

let state: StakePageStore = initialState;

export const stakePageStore: any = {
  init: () => subject.next(state),
  subscribe: (setState: Partial<Observer<unknown>> | undefined) =>
    subject.subscribe(setState),
  sendMessage: (message: Partial<StakePageStore>) => {
    console.log(message);
    state = { ...state, ...message };
    subject.next(state);
  },
};
