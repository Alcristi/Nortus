
import { HttpClient } from "@/infrastructure/http";
import { DashboardData } from "./types";

export function createDashboardNortusService(httpClient: HttpClient, getToken: () => Promise<string>) {

    async function getDashboardData(): Promise<any> {
        const token = await getToken();

        const response = await httpClient.sendRequest<DashboardData, undefined>({
            endpoint: '/nortus-v1/dashboard',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response;
    }

    return {
        getDashboardData,
    };
}