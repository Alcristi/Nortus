


type HttpRequest<Tbody> = {
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    body?: Tbody,
    headers?: Record<string, string>,
}

type Fetch = typeof fetch

export type HttpClient = {
    sendRequest: <TResponse, TBody>(props: HttpRequest<TBody>) => Promise<TResponse>
}


export function createHttpClient(api: Fetch, baseUrl: string) {

    async function sendRequest<TResponse, TBody>(props: HttpRequest<TBody>) {
        const { endpoint, method, body, headers } = props


        try {
            const response = await api(`${baseUrl}${endpoint}`, {
                method,
                body: JSON.stringify(body),
                keepalive: true,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },

            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json() as TResponse
        } catch (error) {
            console.error("Error sending request:", error)
            throw error
        }
    }


    return {
        sendRequest
    }
}


