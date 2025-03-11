// dietplandeleteid.component.ts
import { Component } from '@angular/core';
import { DietPlanService } from '../Service/dietplan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { DietplanService } from '../dietplan.service';

@Component({
  selector: 'app-dietplandeleteid',
  templateUrl: './dietplan-deleteid.component.html',
  styleUrls: ['./dietplan-deleteid.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarWithlogoutComponent],
})
export class DietplandeleteidComponent {
  planId: number | undefined;

  constructor(private dietplanService: DietPlanService) { }

  deleteDietPlan(): void {
    if (this.planId) {
      this.dietplanService.deleteDietPlan(this.planId).subscribe(
        () => {
          console.log(`Diet plan with ID ${this.planId} deleted successfully.`);
          alert('Diet plan with given ID has been deleted successfully.');
          window.location.reload();
          // Optionally, add any additional logic after deletion
        },
        (error) => {
          console.error('Error deleting diet plan:', error);
          alert('Error deleting Diet Plan');

        }
      );
    } else {
      console.warn('Please provide a valid plan ID.');
    }
  }
}