import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlanComponent } from './dietplan.component';

describe('DietplanComponent', () => {
  let component: DietPlanComponent;
  let fixture: ComponentFixture<DietPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
