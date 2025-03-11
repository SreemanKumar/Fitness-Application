import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-crud-dietplan',
  imports: [RouterOutlet, RouterLink, NavbarWithlogoutComponent],
  templateUrl: './crud-dietplan.component.html',
  styleUrl: './crud-dietplan.component.css'
})
export class CrudDietplanComponent {

}
