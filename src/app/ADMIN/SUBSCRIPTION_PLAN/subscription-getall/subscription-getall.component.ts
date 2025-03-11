import { Component, OnInit } from '@angular/core';
//import { SubscriptionService } from '../subscription.service';
//import { Subscription } from '../subscription';
//import { SubscriptionService } from '../Service/subscription.service';
import { Subscription } from '../Service/subscription';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionService } from '../Service/subscription.service';
import { NavbarWithlogoutComponent } from "../../../navbar-withlogout/navbar-withlogout.component";

@Component({
  selector: 'app-subscription-getall',
  templateUrl: './subscription-getall.component.html',
  styleUrls: ['./subscription-getall.component.css'],
  imports: [CommonModule, ReactiveFormsModule, NavbarWithlogoutComponent],
})
export class SubscriptionGetAllComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.fetchSubscriptions();
  }

  fetchSubscriptions(): void {
    this.subscriptionService.getAllSubscriptions().subscribe({
      next: (data) => {
        this.subscriptions = data;
      },
      error: (err) => {
        console.error('Error fetching subscriptions', err);
        alert('Error fetching subscriptions');
      }
    });
  }
}