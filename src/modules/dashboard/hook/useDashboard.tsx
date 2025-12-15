import { useStoreContext } from "@/context/StoreContext/StoreContext";
import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";

export function useDashboard() {
    const { dashboardData, fetchDashboardData } = useStoreContext(
        useShallow((state) => ({
            fetchDashboardData: state.dashboard.fetchDashboardData,
            dashboardData: state.dashboard.data.raw,
        })),
    );

    const chartData = useMemo(() => {
        if (!dashboardData?.kpisTrend) return {};

        const { labels, arpuTrend, churnTrend, conversionTrend, retentionTrend } = dashboardData.kpisTrend;

        return {
            [arpuTrend.name]: labels.map((label, index) => ({
                month: label,
                [arpuTrend.name]: arpuTrend.data[index]
            })),
            [churnTrend.name]: labels.map((label, index) => ({
                month: label,
                [churnTrend.name]: churnTrend.data[index]
            })),
            [conversionTrend.name]: labels.map((label, index) => ({
                month: label,
                [conversionTrend.name]: conversionTrend.data[index]
            })),
            [retentionTrend.name]: labels.map((label, index) => ({
                month: label,
                [retentionTrend.name]: retentionTrend.data[index]
            })),
        };
    }, [dashboardData]);

    return { fetchDashboardData, chartData }
}
