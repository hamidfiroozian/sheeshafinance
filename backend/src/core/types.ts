/* eslint-disable @typescript-eslint/no-explicit-any */

import { IResponse } from './interfaces';

export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>;

export type UnNull<T> = { [P in keyof T]: NonNullable<T[P]> };

export type Always<T> = UnNull<Required<T>>;

export type RequireBy<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]: T[X];
} & { [P in K]-?: Required<T[P]> };

export type DataOrAll<U extends IResponse> = Omit<
  U,
  'error' | 'data' | 'message' | 'status' | 'type' | 'validation' | 'count'
> extends Record<any, never>
  ? Required<U>['data']
  : Omit<RequireBy<U, 'data'>, 'error'>;
