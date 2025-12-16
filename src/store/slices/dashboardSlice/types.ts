import { DashboardData } from "@/app/api/_services/dashboardNortusService/types";

export type DashboardStores = {
  data: {
    raw: DashboardData
  };
};


export type DashboardActions = {
  fetchDashboardData: () => Promise<void>;
};

export type DashboardSlice = DashboardStores & DashboardActions;
