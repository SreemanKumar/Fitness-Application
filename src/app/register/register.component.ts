import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
//import { AuthService } from '../Authservice/AuthService';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UtilitiesService } from '../Services/utilities.service';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone:true,
  imports: [RouterModule, RouterLink, FormsModule, ReactiveFormsModule, NavbarComponent],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private api: ApiService, private router: Router) {}

  onSubmit() {
    const registerRequest = {
      username: this.username,
      password: this.password,
      roles: [this.role]
    };

    this.api.register(registerRequest).subscribe(
      (      response: any) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
        alert('User Registered Successfully');
      },
      (      error: any) => {
        console.error('Error registering user', error);
      }
    );
  }
}