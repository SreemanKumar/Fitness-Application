// src/app/components/dietplan-getuserid.component.ts
import { Component } from '@angular/core';
//import { DietPlanService } from '../services/dietplan.service';
import { DietPlan } from '../Service/dietplan';
import { DietPlanService } from '../Service/dietplan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { DietPlan } from '../models/dietplan';

@Component({
  selector: 'app-dietplan-getuserid',
  standalone: true,
  templateUrl: './dietplan-getuserid.component.html',
  styleUrls: ['./dietplan-getuserid.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarWithlogoutComponent]
})
export class DietPlanGetUserIdComponent {
  userId: number = 1; // Default user ID (can be changed dynamically)
  dietPlans: DietPlan[] = [];

  constructor(private dietPlanService: DietPlanService) {}

  fetchDietPlans(): void {
    if (this.userId > 0) {
      this.dietPlanService.getDietPlanByUserId(this.userId).subscribe((data) => {
        this.dietPlans = data;
      });
    }
  }
}