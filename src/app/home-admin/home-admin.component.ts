import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UtilitiesService } from '../Services/utilities.service';

@Component({
  selector: 'app-home-admin',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

  constructor(private authService: UtilitiesService) { }
  logout() {
    this.authService.logout();
  }
}
