// src/app/components/dietplan/dietplan.component.ts
import { Component } from '@angular/core';
//import { DietPlanService } from '../../services/dietplan.service';
import { DietPlan } from '../Service/dietplan';
import { DietPlanService } from '../Service/dietplan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { DietPlan } from '../../models/dietplan';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NavbarWithlogoutComponent]
})
export class DietPlanComponent {
  dietPlan: DietPlan = {
    startDate: '',
    endDate: '',
    mealPlan: '',
    notes: '',
    userId: 0,
  };

  constructor(private dietPlanService: DietPlanService) { }

  onSubmit(): void {
    this.dietPlanService.createDietPlan(this.dietPlan).subscribe(
      (response) => {
        console.log('Diet Plan created successfully', response);
        alert('Diet Plan Added Successfully');
        window.location.reload();
        // Handle success, e.g., reset form or display a success message
      },
      (error) => {
        console.error('Error creating Diet Plan', error);
        alert('Error creating Diet Plan');
        // Handle error, e.g., display an error message
      }
    );
  }
}