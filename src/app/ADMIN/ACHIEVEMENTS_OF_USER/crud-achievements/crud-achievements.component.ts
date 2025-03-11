import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-crud-achievements',
  imports: [RouterOutlet, RouterLink, NavbarWithlogoutComponent],
  templateUrl: './crud-achievements.component.html',
  styleUrl: './crud-achievements.component.css'
})
export class CrudAchievementsComponent {

  
}
