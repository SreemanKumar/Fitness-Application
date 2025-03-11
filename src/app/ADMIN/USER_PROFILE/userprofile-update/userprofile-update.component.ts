import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserProfileService } from '../Services/userprofile.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-userprofile-update',
  templateUrl: './userprofile-update.component.html',
  styleUrl: './userprofile-update.component.css',
  imports: [CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent]
})
export class UserprofileUpdateComponent {
  updateForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserProfileService) {
    this.updateForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }

  updateUser() {
    if (this.updateForm.valid) {
      const userData = this.updateForm.value;
      this.userService.updateUser(userData.id, userData).subscribe({
        next: (response) => {
          console.log('User updated successfully:', response);
          alert('User updated successfully!');
          window.location.reload();
        },
        error: (err) => {
          console.error('Error updating user:', err);
          alert('Failed to update user.');
          window.location.reload();
        }
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}