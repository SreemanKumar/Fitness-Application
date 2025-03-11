import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from './subscription';
//import { Subscription } from '../models/Subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private baseUrl = 'http://localhost:8090/subscriptions';

  constructor(private http: HttpClient) { }

  createSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.baseUrl}/create`, subscription);
  }

  getAllSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.baseUrl}/getall`);
  }

  deleteSubscription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}