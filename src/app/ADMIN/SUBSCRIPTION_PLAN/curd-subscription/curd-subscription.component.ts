import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../../navbar/navbar.component";

@Component({
  selector: 'app-curd-subscription',
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './curd-subscription.component.html',
  styleUrl: './curd-subscription.component.css'
})
export class CurdSubscriptionComponent {

}
