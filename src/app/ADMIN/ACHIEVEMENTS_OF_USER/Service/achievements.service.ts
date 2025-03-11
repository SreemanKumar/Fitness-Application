// achievement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Achievement } from './achievements';
//import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private apiUrl = 'http://localhost:8090/achievements'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  createAchievement(achievement: Achievement): Observable<Achievement> {
    return this.http.post<Achievement>(`${this.apiUrl}/create`, achievement);
  }

  getAllAchievements(): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(`${this.apiUrl}/getall`);
  }

  deleteAchievement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getAchievementsByUserId(userId: number): Observable<Achievement[]> {
    return this.http.get<Achievement[]>(`${this.apiUrl}/getbyuser/${userId}`);
  }
}