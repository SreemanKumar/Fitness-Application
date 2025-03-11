import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../Service/activitiesforuser.service';
import { Activity } from '../Service/activitiesforuser';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-activitiesforuser-userid',
  standalone: true,
  templateUrl: './activitiesforuser-userid.component.html',
  styleUrls: ['./activitiesforuser-userid.component.css'],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent]
})
export class ActivitiesForUserUserIdComponent {
  // userId!: number;
  // activities: Activity[] = [];
  // message: string = '';

  // constructor(private activityService: ActivityService) { }

  // getActivitiesByUserId() {
  //   this.activityService.getActivitiesByUserId(this.userId).subscribe({
  //     next: (data) => {
  //       if (data) {
  //         this.activities = Array.isArray(data) ? data : [data];
  //         this.message = '';
  //       } else {
  //         this.activities = [];
  //         this.message = 'No activities found for the given User ID.';
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error fetching activities:', err);
  //       this.activities = [];
  //       this.message = 'Error fetching activities. Please try again.';
  //     }
  //   });
  // }

  userId: number = 1; // Default user ID (can be changed dynamically)
  activities: Activity[] = [];

  constructor(private activitiesService: ActivityService) { }

  fetchActivities(): void {
    if (this.userId > 0) {
      this.activitiesService.getActivitiesForUser(this.userId).subscribe((data) => {
        this.activities = data;
      });
    }
  }
}