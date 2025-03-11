// src/app/services/dietplan.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DietPlan } from './dietplan';
//import { DietPlan } from '../models/dietplan';

@Injectable({
  providedIn: 'root',
})
export class DietPlanService {
  private baseUrl = 'http://localhost:8090/diet-plans';

  constructor(private http: HttpClient) { }

  createDietPlan(dietPlan: DietPlan): Observable<DietPlan> {
    return this.http.post<DietPlan>(`${this.baseUrl}/create`, dietPlan);
  }

  updateDietPlan(id: number, dietPlan: DietPlan): Observable<DietPlan> {
    return this.http.put<DietPlan>(`${this.baseUrl}/update/${id}`, dietPlan);
  }

  getDietPlanById(id: number): Observable<DietPlan> {
    return this.http.get<DietPlan>(`${this.baseUrl}/get/${id}`);
  }

  getAllDietPlans(): Observable<DietPlan[]> {
    return this.http.get<DietPlan[]>(`${this.baseUrl}/get-all`);
  }

  // getDietPlansByUserId(userId: number): Observable<DietPlan[]> {
  //   return this.http.get<DietPlan[]>(`${this.baseUrl}/get-by-user/${userId}`);
  // }

  deleteDietPlanById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  deleteDietPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getDietPlanByUserId(userId: number): Observable<DietPlan[]> {
    return this.http.get<DietPlan[]>(`${this.baseUrl}/get-by-user/${userId}`);
  }
}