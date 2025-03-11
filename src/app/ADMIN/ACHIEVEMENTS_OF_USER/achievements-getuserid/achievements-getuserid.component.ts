// src/app/components/achievements-getuserid.component.ts
import { Component } from '@angular/core';
//import { AchievementsService } from '../services/achievements.service';
import { Achievement } from '../Service/achievements';
import { AchievementService } from '../Service/achievements.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { Achievement } from '../models/achievement';

@Component({
  selector: 'app-achievements-getuserid',
  standalone: true,
  templateUrl: './achievements-getuserid.component.html',
  styleUrls: ['./achievements-getuserid.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NavbarWithlogoutComponent]
})
export class AchievementsGetUserIdComponent {
  userId: number = 1; // Default user ID (can be changed dynamically)
  achievements: Achievement[] = [];

  constructor(private achievementsService: AchievementService) { }

  fetchAchievements(): void {
    if (this.userId > 0) {
      this.achievementsService.getAchievementsByUserId(this.userId).subscribe((data) => {
        this.achievements = data;
      });
    }
  }
}