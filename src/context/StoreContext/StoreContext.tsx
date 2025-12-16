'use client';

import { createStore } from '@/store/factoryStore';
import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { Selector, StoreApi, StoreProviderProps } from './types';

const StoreContext = createContext<StoreApi | undefined>(undefined);

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createStore();
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = <T,>(selector: Selector<T>): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(`useStore must be used within StoreProvider`);
  }

  return useStore(storeContext, selector);
};
