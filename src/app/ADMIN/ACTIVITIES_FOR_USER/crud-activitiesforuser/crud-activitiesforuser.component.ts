import { Component } from '@angular/core';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-crud-activitiesforuser',
  imports: [RouterOutlet, RouterLink, NavbarWithlogoutComponent],
  templateUrl: './crud-activitiesforuser.component.html',
  styleUrl: './crud-activitiesforuser.component.css'
})
export class CrudActivitiesforuserComponent {

}
