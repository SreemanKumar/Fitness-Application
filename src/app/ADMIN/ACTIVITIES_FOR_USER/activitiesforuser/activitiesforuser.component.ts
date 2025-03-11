import { Component } from '@angular/core';
//import { ActivitiesForUser } from '../activitiesforuser'; // Import the interface
//import { ActivitiesForUserService } from '../activitiesforuser.service'; // Import the service
import { Activity } from '../Service/activitiesforuser';
import { ActivityService } from '../Service/activitiesforuser.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-activitiesforuser',
  templateUrl: './activitiesforuser.component.html',
  styleUrls: ['./activitiesforuser.component.css'],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent],
})
export class ActivitiesforuserComponent {
  activity: Activity = {
    activityType: '',
    date: '',
    durationInMinutes: 0,
    caloriesBurned: 0,
    userId: 0
  };

  constructor(private activityService: ActivityService) { }

  createActivity(): void {
    this.activityService.createActivity(this.activity).subscribe(
      response => {
        console.log('Activity Created:', response);
        alert('Activity created successfully!');
        this.resetForm();
      },
      error => {
        console.error('Error creating activity:', error);
        alert('Failed to create activity.');
      }
    );
  }

  resetForm(): void {
    this.activity = {
      activityType: '',
      date: '',
      durationInMinutes: 0,
      caloriesBurned: 0,
      userId: 0
    };
  }
}