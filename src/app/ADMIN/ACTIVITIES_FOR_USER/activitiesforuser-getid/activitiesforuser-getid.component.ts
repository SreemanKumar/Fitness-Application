import { Component } from '@angular/core';
//import { ActivitiesForUserService } from '../activitiesforuser.service';
//import { ActivitiesForUser } from '../activitiesforuser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../Service/activitiesforuser.service';
import { Activity } from '../Service/activitiesforuser';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-activitiesforuser-getid',
  standalone: true,
  templateUrl: './activitiesforuser-getid.component.html',
  styleUrls: ['./activitiesforuser-getid.component.css'],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent]
})
export class ActivitiesForUserGetIdComponent {
  activityId!: number;
  activity!: Activity;

  constructor(private activityService: ActivityService) { }

  getActivityById() {
    this.activityService.getActivityById(this.activityId).subscribe({
      next: (data) => {
        this.activity = data;
      },
      error: (err) => {
        console.error('Error fetching activity:', err);
        alert('Activity not found!');
      }
    });
  }
}