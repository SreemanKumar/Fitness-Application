import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilitiesService } from '../../Services/utilities.service';
//import { UtilitiesService } from './utilities.service';

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {
    constructor(private utilitiesService: UtilitiesService, private router: Router) {
        console.log(utilitiesService + " " + router)
    }

    canActivate(): boolean {
        console.log("user type......" + this.utilitiesService.getUserType());
        if (this.utilitiesService.getUserType() === 'ROLE_USER') {
            return true;
        } else {
            this.router.navigate(['/unauthorized']);
            return false;
        }
    }
}