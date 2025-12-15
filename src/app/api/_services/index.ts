import { createHttpClient } from "@/infrastructure/http";
import { createAuthNortusService } from "./authNortusService";
import { createDashboardNortusService } from "./dashboardNortusService";

const apiUrl = process.env.URL_NORTUS_API

if (!apiUrl) {
    throw new Error('URL_NORTUS_API is not defined in environment variables.')
}

const nortusHttpClient = createHttpClient(fetch, apiUrl)

const authNortusService = createAuthNortusService(nortusHttpClient)

const dashboardNortusService = createDashboardNortusService(nortusHttpClient, authNortusService.getToken)



export {
    authNortusService,
    dashboardNortusService
};

