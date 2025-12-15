import { HttpClient } from "@/infrastructure/http";

export function createAuthNortusService(httpClient: HttpClient) {
    const email = process.env.USERNAME_NORTUS_API || '';
    const password = process.env.PASSWORD_NORTUS_API || '';

    let token = '';



    function isTokenExpired(token: string): boolean {
        if (!token) return true;

        const [, payloadB64] = token.split('.');
        if (!payloadB64) return true;

        const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString('utf-8'));

        if (typeof payload.exp !== 'number') return true;

        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp < currentTime;


    }

    async function executeAuth(): Promise<string> {

        const response = await httpClient.sendRequest<{ access_token: string }, { email: string, password: string }>({
            endpoint: '/auth/login',
            method: 'POST',
            body: {
                email,
                password,
            },
        });

        token = response.access_token;
        return token;
    }

    async function refreshToken(): Promise<string> {
        const response = await httpClient.sendRequest<{ access_token: string }, { access_token: string }>({
            endpoint: '/auth/refresh',
            method: 'POST',
            body: {
                access_token: token,
            },
        });

        token = response.access_token;
        return token;
    }

    async function getToken(): Promise<string> {
        if (!token || isTokenExpired(token)) {
            if (token) {
                return await refreshToken();
            } else {
                return await executeAuth();
            }
        }

        return token;
    }


    return {
        getToken,
    };
}

