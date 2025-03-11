import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdSubscriptionComponent } from './curd-subscription.component';

describe('CurdSubscriptionComponent', () => {
  let component: CurdSubscriptionComponent;
  let fixture: ComponentFixture<CurdSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurdSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
