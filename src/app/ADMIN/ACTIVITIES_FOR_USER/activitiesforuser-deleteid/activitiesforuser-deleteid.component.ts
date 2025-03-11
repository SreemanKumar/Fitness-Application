import { Component } from '@angular/core';
//import { ActivitiesForUserService } from '../activitiesforuser.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../Service/activitiesforuser.service';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-activitiesforuser-deleteid',
  standalone: true,
  templateUrl: './activitiesforuser-deleteid.component.html',
  styleUrls: ['./activitiesforuser-deleteid.component.css'],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent]
})
export class ActivitiesForUserDeleteIdComponent {
  activityId!: number;
  message: string = '';

  constructor(private activityService: ActivityService) {}

  deleteActivityById() {
    this.activityService.deleteActivityById(this.activityId).subscribe({
      next: () => {
        this.message = `Activity with ID ${this.activityId} deleted successfully.`;
      },
      error: (err) => {
        console.error('Error deleting activity:', err);
        this.message = `Error: Activity with ID ${this.activityId} not found!`;
      }
    });
  }
}