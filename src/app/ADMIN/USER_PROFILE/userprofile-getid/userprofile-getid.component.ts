import { Component } from '@angular/core';
//import { UserProfileService } from '../userprofile.service';
//import { User } from '../user';
import { UserProfileService } from '../Services/userprofile.service';
import { User } from '../Services/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-userprofile-getid',
  templateUrl: './userprofile-getid.component.html',
  styleUrl: './userprofile-getid.component.css',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent],
})
export class UserprofileGetidComponent {
  userId: number = 0;
  userData: User | null = null;
  errorMessage: string = '';

  constructor(private userProfileService: UserProfileService) { }

  getUserById(): void {
    if (this.userId > 0) {
      this.userProfileService.getUserById(this.userId).subscribe({
        next: (data) => {
          this.userData = data;
          this.errorMessage = '';
        },
        error: (err) => {
          this.userData = null;
          this.errorMessage = 'User not found';
          alert('User Not Found!');
          window.location.reload();
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid User ID';
      alert('Please enter a valid User ID');
      window.location.reload();
    }
  }
}