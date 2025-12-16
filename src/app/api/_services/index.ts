import { createHttpClient } from "@/infrastructure/http";
import { createAuthNortusService } from "./authNortusService";
import { createDashboardNortusService } from "./dashboardNortusService";

const apiUrl = process.env.URL_NORTUS_API || ''

const nortusHttpClient = createHttpClient(fetch, apiUrl)

const authNortusService = createAuthNortusService(nortusHttpClient)

const dashboardNortusService = createDashboardNortusService(nortusHttpClient, authNortusService.getToken)



export {
    authNortusService,
    dashboardNortusService
};

