import { Component } from '@angular/core';
import { Route, RouterModule, RouterOutlet } from '@angular/router'; // <-- Import RouterModule here
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
//import { AuthService } from './Authservice/AuthService';


// const routes: Route[] = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'home-user', component: HomeUserComponent },
//   { path: 'home-admin', component: HomeAdminComponent },

// { path: '', redirectTo: '/register', pathMatch: 'full' }
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // <-- Add RouterModule to imports array
  providers: [],
  template: '<router-outlet></router-outlet>',  // This renders the current route's component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: any;
}