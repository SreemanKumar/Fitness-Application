// src/app/services/healthmetrics.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthMetrics } from './healthmetrics';
//import { HealthMetrics } from '../models/healthmetrics';

@Injectable({
  providedIn: 'root',
})
export class HealthMetricsService {
  private apiUrl = 'http://localhost:8090/healthmetrics';

  constructor(private http: HttpClient) { }

  getAllHealthMetrics(): Observable<HealthMetrics[]> {
    return this.http.get<HealthMetrics[]>(`${this.apiUrl}/getall`);
  }

  createHealthMetrics(metrics: HealthMetrics): Observable<HealthMetrics> {
    return this.http.post<HealthMetrics>(`${this.apiUrl}/create`, metrics);
  }
}