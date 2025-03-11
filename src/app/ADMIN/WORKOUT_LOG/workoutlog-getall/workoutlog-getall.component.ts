// src/app/workoutlog-getall/workoutlog-getall.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { WorkoutlogService } from '../workoutlog.service';
//import { WorkoutLog } from '../workoutlog';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutLog } from '../Service/workoutlog';
import { WorkoutLogService } from '../Service/workoutlog.service';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-workoutlog-getall',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavbarWithlogoutComponent],
  templateUrl: './workoutlog-getall.component.html',
  styleUrls: ['./workoutlog-getall.component.css'],
})
export class WorkoutlogGetallComponent implements OnInit {
  workoutLogs: WorkoutLog[] = [];

  constructor(private workoutlogService: WorkoutLogService) { }

  ngOnInit(): void {
    this.workoutlogService.getAllWorkoutLogs().subscribe((logs) => {
      this.workoutLogs = logs;
    });
  }
}