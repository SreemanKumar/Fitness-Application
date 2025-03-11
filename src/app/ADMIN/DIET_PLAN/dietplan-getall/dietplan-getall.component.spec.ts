import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanGetallComponent } from './dietplan-getall.component';

describe('DietplanGetallComponent', () => {
  let component: DietPlanGetallComponent;
  let fixture: ComponentFixture<DietPlanGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPlanGetallComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DietPlanGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
