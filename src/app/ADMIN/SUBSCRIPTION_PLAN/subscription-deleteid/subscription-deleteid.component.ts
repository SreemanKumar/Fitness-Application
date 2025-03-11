import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from '../Service/subscription.service';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";
//import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription-deleteid',
  standalone: true,
  imports: [FormsModule, NavbarWithlogoutComponent],
  templateUrl: './subscription-deleteid.component.html',
  styleUrl: './subscription-deleteid.component.css'
})
export class SubscriptionDeleteIdComponent {
  subscriptionId!: number;

  constructor(private subscriptionService: SubscriptionService) { }

  deleteSubscription() {
    if (!this.subscriptionId) {
      alert('Please enter a valid Subscription ID');
      return;
    }

    this.subscriptionService.deleteSubscription(this.subscriptionId).subscribe(
      () => {
        console.log('Subscription deleted successfully');
        alert('Subscription deleted successfully');
        this.subscriptionId = 0; // Reset input
        window.location.reload();
      },
      (error) => {
        console.error('Error deleting subscription:', error);
        alert('Failed to delete subscription');
      }
    );
  }
}