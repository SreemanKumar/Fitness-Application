import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // constructor(private router: Router) { }

  // login() {
  //   if (this.username === 'admin' && this.password === 'password') {
  //     alert('Login successful!');
  //     this.router.navigate(['/home']);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }

  constructor(private api: ApiService, private router: Router) { }

  login(username: string, password: string): void {
    this.api.login({ username, password }).subscribe(
      response => {
        // Navigate to the appropriate module based on the role
        const role = response.roleName;
        if (role === 'ROLE_USER') {
          this.router.navigate(['/home-user']);
          console.log("Logging as USER");
          alert("Logging as USER");
          //window.location.reload();


        } else if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/home-admin']);
          console.log("Logging as ADMIN");
          alert("Logging as ADMIN");
          //window.location.reload();
        }
        else {
          alert('Else block is executed');
        }
      },
      error => {
        console.error('Login failed', error);
        // this.router.navigate(['/home-admin']);
        alert("Login failed, Retry!");
      }
    );
  }
}