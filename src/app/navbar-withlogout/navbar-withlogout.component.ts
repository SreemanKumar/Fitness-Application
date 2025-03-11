import { Component } from '@angular/core';
import { UtilitiesService } from '../Services/utilities.service';

@Component({
  selector: 'app-navbar-withlogout',
  imports: [],
  templateUrl: './navbar-withlogout.component.html',
  styleUrl: './navbar-withlogout.component.css'
})
export class NavbarWithlogoutComponent {

  constructor(private authService: UtilitiesService) { }
  logout() {
    this.authService.logout();
  }

  homeadmin() {
    this.authService.homeadmin();
  }
}
