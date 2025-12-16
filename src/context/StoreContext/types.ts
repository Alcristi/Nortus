import { createStore } from '@/store/factoryStore';
import { Store } from '@/store/types';
import { ReactNode } from 'react';

export type StoreApi = ReturnType<typeof createStore>;

export interface StoreProviderProps {
  children: ReactNode;
}

export type Selector<T> = (store: Store) => T;
