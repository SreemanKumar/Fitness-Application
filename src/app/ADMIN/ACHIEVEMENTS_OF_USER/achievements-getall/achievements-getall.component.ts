import { Component, OnInit } from '@angular/core';
//import { AchievementService } from '../services/achievement.service';
//import { Achievement } from '../models/achievement';
import { AchievementService } from '../Service/achievements.service';
import { Achievement } from '../Service/achievements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-achievements-getall',
  templateUrl: './achievements-getall.component.html',
  styleUrls: ['./achievements-getall.component.css'],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent]
})
export class AchievementsGetAllComponent implements OnInit {
  achievements: Achievement[] = [];

  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    this.achievementService.getAllAchievements().subscribe(
      (data) => {
        this.achievements = data;
      },
      (error) => {
        console.error('Error fetching achievements', error);
      }
    );
  }
}