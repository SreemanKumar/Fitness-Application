import { Component } from '@angular/core';
import { UserProfileService } from '../Services/userprofile.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { UserProfileService } from '../userprofile.service';

@Component({
  selector: 'app-userprofile-deleteall',
  templateUrl: './userprofile-deleteall.component.html',
  styleUrl: './userprofile-deleteall.component.css',
  imports: [CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent]
})
export class UserprofileDeleteallComponent {
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userProfileService: UserProfileService) { }

  deleteAllUsers(): void {
    this.userProfileService.deleteAllUser().subscribe({
      next: () => {
        this.successMessage = 'All users have been deleted successfully!';
        this.errorMessage = '';
      },
      error: (err: any) => {  // Explicitly define the type as `any`
        console.error('Error deleting users:', err);
        this.errorMessage = 'Failed to delete users. Please try again.';
        this.successMessage = '';
      }
    });
  }
}