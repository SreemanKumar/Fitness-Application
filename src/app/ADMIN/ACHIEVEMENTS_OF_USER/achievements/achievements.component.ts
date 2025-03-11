// achievement.component.ts
import { Component } from '@angular/core';
//import { AchievementService } from './achievement.service';
//import { Achievement } from './achievement';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AchievementService } from '../Service/achievements.service';
import { Achievement } from '../Service/achievements';
import { CommonModule } from '@angular/common';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarWithlogoutComponent], // Import ReactiveFormsModule for form handling
})
export class AchievementComponent {
  achievementForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private achievementService: AchievementService
  ) {
    this.achievementForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateAchieved: ['', Validators.required],
      userId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit(): void {
    if (this.achievementForm.valid) {
      const newAchievement: Achievement = this.achievementForm.value;
      this.achievementService.createAchievement(newAchievement).subscribe({
        next: (response) => {
          console.log('Achievement created:', response);
          // Optionally, reset the form or provide user feedback here
        },
        error: (error) => {
          console.error('Error creating achievement:', error);
          // Handle error appropriately
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}