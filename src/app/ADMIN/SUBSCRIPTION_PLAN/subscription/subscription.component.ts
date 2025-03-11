import { Component } from '@angular/core';
//import { SubscriptionService } from '../../services/subscription.service';
//import { Subscription } from '../../models/Subscription';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from '../Service/subscription';
import { SubscriptionService } from '../Service/subscription.service';
import { NavbarWithlogoutComponent } from '../../../navbar-withlogout/navbar-withlogout.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, NavbarWithlogoutComponent],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  subscription: Subscription = {
    subscriptionType: '',
    startDate: '',
    endDate: '',
    price: 0,
    userId: 0
  };

  constructor(private subscriptionService: SubscriptionService) { }

  createSubscription() {
    this.subscriptionService.createSubscription(this.subscription).subscribe(
      response => {
        alert('Subscription created successfully!');
        window.location.reload();
      },
      error => {
        alert('Error creating subscription!');
        window.location.reload();
      }
    );
  }
}