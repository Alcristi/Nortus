import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';


import { createHttpClient } from '@/infrastructure/http';
import { createDashboardSlice } from './slices/dashboardSlice/dashboardSlice';
import { Store } from './types';

enableMapSet();

const baseUrl = process.env.URL || 'http://localhost:3000'

const httpClient = createHttpClient(fetch, baseUrl)

export const createStore = () =>
  create<Store>()(
    devtools(
      persist(immer((set, get, api) => ({
        dashboard: createDashboardSlice(set, get, api, httpClient)
      })), {
        name: 'store'
      })
    ),
  );
