import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../ADMIN/USER_PROFILE/Services/user';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  jwtToken: any;
  userType: any;
  // userId: any;


  setToken(token: string, userType: string): void {
    this.jwtToken = token;
    this.userType = userType;
    localStorage.setItem('jwt', token);
    localStorage.setItem('userType', userType);
  }

  getToken(): string | null {
    console.log(this.jwtToken)
    return this.jwtToken || localStorage.getItem('jwt');
  }

  getUserType(): string | null {
    return this.userType || localStorage.getItem('userType');
  }

  // setUserId(userId: string): void {
  //   this.userId = userId;
  //   localStorage.setItem('userId', userId);
  // }

  // getUserId(): string | null {
  //   console.log(this.userId);
  //   return this.userId || localStorage.getItem('userId');
  // }


  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userType');
    // Redirect to login page after logout
    window.location.href = '/login';
  }

  homeadmin() {
    window.location.href = '/home-admin';
  }
}
