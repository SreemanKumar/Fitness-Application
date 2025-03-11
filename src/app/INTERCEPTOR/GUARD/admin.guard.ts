import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilitiesService } from '../../Services/utilities.service';
//import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private utilitiesService: UtilitiesService, private router: Router) {}

  canActivate(): boolean {
    if (this.utilitiesService.getUserType() === 'ROLE_ADMIN') {
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}