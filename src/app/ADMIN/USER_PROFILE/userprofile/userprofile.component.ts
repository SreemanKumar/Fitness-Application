import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

//import { User } from '../models/user.model';
import { UserProfileService } from '../Services/userprofile.service';
import { CommonModule } from '@angular/common';
import { User } from '../Services/user';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-userprofile',
  standalone: true,
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css',
  imports: [CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent]
})
export class UserProfileComponent implements OnInit {
  userForm!: FormGroup;
  private fb = inject(FormBuilder);
  private userService = inject(UserProfileService);
  constructor(private route: Router) {

  }
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      goal: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe({
        next: (response: User) => {
          console.log('User created successfully:', response);
          alert('User Profile Created Successfully!');
          window.location.reload();

        },
        error: (err: any) => {
          console.error('Error creating user:', err);
          alert('Failed to create user.');
        }
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}