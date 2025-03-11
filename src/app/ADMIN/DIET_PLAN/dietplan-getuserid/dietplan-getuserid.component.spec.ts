import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanGetUserIdComponent } from './dietplan-getuserid.component';

describe('DietplanGetuseridComponent', () => {
  let component: DietPlanGetUserIdComponent;
  let fixture: ComponentFixture<DietPlanGetUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPlanGetUserIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPlanGetUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
