import { NextRequest } from "next/server";
import { dashboardNortusService } from "../_services";
import { validadeSession } from "../_utils";

export async function GET(req: NextRequest) {
    try {
        await validadeSession(req)

        const dashboardData = await dashboardNortusService.getDashboardData();

        return Response.json(dashboardData);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return new Response('Internal Server Error', { status: 500 });

    }
}