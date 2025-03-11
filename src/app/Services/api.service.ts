import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) { }

  register(registerRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, registerRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, loginRequest).pipe(
      tap(response => {
        this.utilitiesService.setToken(response.token, response.roleName);
      })
    );
  }
}