
import { DashboardData } from '@/app/api/_services/dashboardNortusService/types';
import { HttpClient } from '@/infrastructure/http';
import { StoreApi, StoreGet, StoreSet } from '../../types';
import { DashboardSlice, DashboardStores } from './types';

const initialState: DashboardStores = {
  data: {
    raw: {} as DashboardData
  },
};

export const createDashboardSlice = (
  set: StoreSet,
  get: StoreGet,
  api: StoreApi,
  httpClient: HttpClient
): DashboardSlice => ({
  ...initialState,

  async fetchDashboardData() {
    if (!Object.keys(get().dashboard.data.raw).length) {
      const response = await httpClient.sendRequest<any, DashboardData>({
        endpoint: '/api/dashboard',
        method: 'GET',
      })


      set((state) => {
        state.dashboard.data.raw = response
      }, undefined, 'fetchDashboardData')
    }
  }
});
