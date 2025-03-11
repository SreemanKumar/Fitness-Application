// src/app/components/healthmetrics-getall.component.ts
import { Component, OnInit } from '@angular/core';
//import { HealthMetricsService } from '../services/healthmetrics.service';
//import { HealthMetrics } from '../models/healthmetrics';
import { HealthMetricsService } from '../Service/healthmetrics.service';
import { HealthMetrics } from '../Service/healthmetrics';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-healthmetrics-getall',
  standalone: true,
  templateUrl: './healthmetrics-getall.component.html',
  styleUrls: ['./healthmetrics-getall.component.css'],
  imports: [CommonModule, FormsModule, NavbarWithlogoutComponent]
})
export class HealthMetricsGetAllComponent implements OnInit {
  healthMetricsList: HealthMetrics[] = [];

  constructor(private healthMetricsService: HealthMetricsService) { }

  ngOnInit(): void {
    this.healthMetricsService.getAllHealthMetrics().subscribe((data) => {
      this.healthMetricsList = data;
    });
  }
}