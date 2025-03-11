import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionGetAllComponent } from './subscription-getall.component';

//import { SubscriptionGetallComponent } from './subscription-getall.component';

describe('SubscriptionGetallComponent', () => {
  let component: SubscriptionGetAllComponent;
  let fixture: ComponentFixture<SubscriptionGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionGetAllComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubscriptionGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
