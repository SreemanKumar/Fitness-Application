import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionGetidComponent } from './subscription-getid.component';

describe('SubscriptionGetidComponent', () => {
  let component: SubscriptionGetidComponent;
  let fixture: ComponentFixture<SubscriptionGetidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionGetidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
