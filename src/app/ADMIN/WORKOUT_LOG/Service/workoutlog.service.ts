import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutLog } from './workoutlog';

@Injectable({
  providedIn: 'root',
})
export class WorkoutLogService {
  private apiUrl = 'http://localhost:8090/workout-logs';

  constructor(private http: HttpClient) { }

  createWorkoutLog(workoutLog: WorkoutLog): Observable<WorkoutLog> {
    return this.http.post<WorkoutLog>(`${this.apiUrl}/create`, workoutLog);
  }

  getAllWorkoutLogs(): Observable<WorkoutLog[]> {
    return this.http.get<WorkoutLog[]>(`${this.apiUrl}/get-all`);
  }
}