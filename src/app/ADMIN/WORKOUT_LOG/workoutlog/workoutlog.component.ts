import { Component } from '@angular/core';
//import { WorkoutLogService } from './workoutlog.service';
import { WorkoutLog } from '../Service/workoutlog';
import { WorkoutLogService } from '../Service/workoutlog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from '../../../navbar-withlogout/navbar-withlogout.component';
//import { WorkoutLog } from './workoutlog';

@Component({
  selector: 'app-workoutlog',
  standalone: true,
  templateUrl: './workoutlog.component.html',
  styleUrl: './workoutlog.component.css',
  providers: [WorkoutLogService],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent]
})
export class WorkoutLogComponent {
  workoutLog: WorkoutLog = {
    date: '',
    workoutType: '',
    duration: 0,
    caloriesBurned: 0,
    notes: '',
    userId: 0
  };

  constructor(private workoutLogService: WorkoutLogService) { }

  submitWorkoutLog() {
    this.workoutLogService.createWorkoutLog(this.workoutLog).subscribe({
      next: (response) => {
        console.log('Workout Log Created:', response);
        alert('Workout log added successfully!');
        this.workoutLog = {
          date: '',
          workoutType: '',
          duration: 0,
          caloriesBurned: 0,
          notes: '',
          userId: 0
        };
      },
      error: (error) => {
        console.error('Error creating workout log:', error);
        alert('Error adding workout log!');
      }
    });
  }
}