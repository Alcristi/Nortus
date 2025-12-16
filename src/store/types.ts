import { StateCreator } from 'zustand';
import { DashboardSlice } from './slices/dashboardSlice/types';


export type Store = {
  dashboard: DashboardSlice;
};

export type StoreSlice<TSclice> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  TSclice
>;

export type StoreSet = Parameters<StoreSlice<unknown>>[0];
export type StoreGet = Parameters<StoreSlice<unknown>>[1];
export type StoreApi = Parameters<StoreSlice<unknown>>[2];
