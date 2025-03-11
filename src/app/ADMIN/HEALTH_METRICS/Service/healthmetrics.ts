// src/app/models/healthmetrics.ts
export interface HealthMetrics {
    metricsId?: number;
    date: string;
    weight: number;
    height: number;
    bmi: number;
    notes: string;
    userId: number;
}