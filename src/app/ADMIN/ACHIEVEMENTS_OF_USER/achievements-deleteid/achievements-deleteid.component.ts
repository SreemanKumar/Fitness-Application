import { Component } from '@angular/core';
import { AchievementService } from '../Service/achievements.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { AchievementService } from '../achievement.service';

@Component({
  selector: 'app-achievements-deleteid',
  templateUrl: './achievements-deleteid.component.html',
  styleUrls: ['./achievements-deleteid.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarWithlogoutComponent]
})
export class AchievementsDeleteidComponent {
  achievementId: number | null = null;
  message: string = '';

  constructor(private achievementService: AchievementService) { }

  deleteAchievement(): void {
    if (this.achievementId !== null) {
      this.achievementService.deleteAchievement(this.achievementId).subscribe(
        () => {
          this.message = `Achievement with ID ${this.achievementId} deleted successfully.`;
          this.achievementId = null;
        },
        (error) => {
          this.message = `Error deleting achievement: ${error.message}`;
        }
      );
    } else {
      this.message = 'Please enter a valid Achievement ID.';
    }
  }
}