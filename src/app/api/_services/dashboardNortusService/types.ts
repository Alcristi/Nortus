export interface Trend {
    name: string;
    data: number[];
}

export interface KpisTrend {
    labels: string[];
    arpuTrend: Trend;
    conversionTrend: Trend;
    churnTrend: Trend;
    retentionTrend: Trend;
}

export interface KpiValue {
    valor: number;
    variacao: number;
}

export interface KpisResume {
    arpu: KpiValue;
    conversion: KpiValue;
    retention: KpiValue;
    churn: KpiValue;
}

export interface Segment {
    nome: string;
    valor: number;
}

export interface ClientFilters {
    status: string[];
    secureType: string[];
    locations: string[];
}

export interface ClientData {
    id: string;
    name: string;
    email: string;
    secureType: string;
    monthValue: number;
    status: string;
    renewalDate: string; // Pode ser `Date` se você converter a string
    location: string;
}

export interface ActiveClients {
    filters: ClientFilters;
    data: ClientData[];
}

export interface DashboardData {
    kpisTrend: KpisTrend;
    kpisResume: KpisResume;
    segments: Segment[];
    activeClients: ActiveClients;
}