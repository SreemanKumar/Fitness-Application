import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activitiesforuser';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private baseUrl = "http://localhost:8090/activities";

  constructor(private http: HttpClient) { }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.baseUrl}/create`, activity);
  }

  updateActivity(id: number, activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(`${this.baseUrl}/update/${id}`, activity);
  }

  deleteActivity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.baseUrl}/getall`);
  }

  getActivityById(activityId: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.baseUrl}/getbyid/${activityId}`);
  }

  deleteActivityById(activityId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${activityId}`);
  }

  // getActivitiesByUserId(userId: number): Observable<Activity[]> {
  //   return this.http.get<Activity[]>(`${this.baseUrl}/getbyuser/${userId}`);
  // }

  getActivitiesForUser(userId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.baseUrl}/getbyuser/${userId}`);
  }
}