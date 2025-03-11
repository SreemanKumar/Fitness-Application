import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../Services/userprofile.service';
import { User } from '../Services/user';
import { CommonModule } from '@angular/common';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { UserProfileService } from '../userprofile.service';
//import { User } from '../user';

@Component({
  selector: 'app-userprofile-getall',
  templateUrl: './userprofile-getall.component.html',
  styleUrls: ['./userprofile-getall.component.css'],
  imports: [CommonModule, NavbarWithlogoutComponent]
})
export class UserProfileGetAllComponent implements OnInit {
  users: User[] = [];
  errorMessage: string = '';

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userProfileService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err: any) => {
        console.error('Error fetching users:', err);
        this.errorMessage = 'Failed to load users. Please try again.';
      }
    });
  }
}