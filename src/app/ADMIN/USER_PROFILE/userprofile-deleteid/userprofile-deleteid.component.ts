import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserProfileService } from '../Services/userprofile.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
// import { UserProfileService } from '../userprofile.service';

@Component({
  selector: 'app-userprofile-deleteid',
  standalone: true,
  templateUrl: './userprofile-deleteid.component.html',
  styleUrl: './userprofile-deleteid.component.css',
  imports: [CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent],
})
export class UserprofileDeleteidComponent {
  deleteForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private userService: UserProfileService) {
    this.deleteForm = this.fb.group({
      userId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onDelete(): void {
    const userId = this.deleteForm.value.userId;

    if (userId) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.message = `User with ID ${userId} deleted successfully.`;
          this.deleteForm.reset();
          console.log('User Deleted successfully:');
          alert('User Deleted successfully!');
          window.location.reload();
        },
        error: (err) => {
          this.message = `Error deleting user: ${err.error.message || 'Unknown error'}`;
          alert('Error Deleting User Retry Again !');
        }
      });
    }
  }
}