// src/app/components/dietplan-list/dietplan-list.component.ts
import { Component, OnInit } from '@angular/core';
//import { DietPlanService } from '../../services/dietplan.service';
import { DietPlan } from '../Service/dietplan';
import { DietPlanService } from '../Service/dietplan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { DietPlan } from '../../models/dietplan.model';

@Component({
  selector: 'app-dietplan-getall',
  templateUrl: './dietplan-getall.component.html',
  styleUrls: ['./dietplan-getall.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
})
export class DietPlanGetallComponent implements OnInit {
  dietPlans: DietPlan[] = [];

  constructor(private dietPlanService: DietPlanService) { }

  ngOnInit(): void {
    this.fetchDietPlans();
  }

  fetchDietPlans(): void {
    this.dietPlanService.getAllDietPlans().subscribe(
      (data) => {
        this.dietPlans = data;
      },
      (error) => {
        console.error('Error fetching diet plans', error);
      }
    );
  }
}