import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDeleteIdComponent } from './subscription-deleteid.component';

describe('SubscriptionDeleteidComponent', () => {
  let component: SubscriptionDeleteIdComponent;
  let fixture: ComponentFixture<SubscriptionDeleteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionDeleteIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionDeleteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
