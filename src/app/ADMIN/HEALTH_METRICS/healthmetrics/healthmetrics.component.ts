// src/app/components/healthmetrics.component.ts
import { Component } from '@angular/core';
//import { HealthMetricsService } from '../services/healthmetrics.service';
import { HealthMetrics } from '../Service/healthmetrics';
import { HealthMetricsService } from '../Service/healthmetrics.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { HealthMetrics } from '../models/healthmetrics';

@Component({
  selector: 'app-healthmetrics',
  standalone: true,
  templateUrl: './healthmetrics.component.html',
  styleUrls: ['./healthmetrics.component.css'],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent]
})
export class HealthMetricsComponent {
  healthMetrics: HealthMetrics = {
    metricsId: 0,
    date: '',
    weight: 0,
    height: 0,
    bmi: 0,
    notes: '',
    userId: 0, // Example user ID; this should be dynamic in a real app
  };

  constructor(private healthMetricsService: HealthMetricsService) {}

  calculateBMI(): void {
    if (this.healthMetrics.height > 0) {
      this.healthMetrics.bmi =
        (this.healthMetrics.weight / (this.healthMetrics.height * this.healthMetrics.height)) * 10000;
    }
  }

  submitHealthMetrics(): void {
    this.calculateBMI(); // Ensure BMI is calculated before submission
    this.healthMetricsService.createHealthMetrics(this.healthMetrics).subscribe(() => {
      alert('Health Metrics Added Successfully');
      window.location.reload(); // Refresh to show updated data
    });
  }
}