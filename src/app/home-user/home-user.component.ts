import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UtilitiesService } from '../Services/utilities.service';

@Component({
  selector: 'app-home-user',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent {
  constructor(private authService: UtilitiesService) { }
  logout() {
    this.authService.logout();
  }
}
