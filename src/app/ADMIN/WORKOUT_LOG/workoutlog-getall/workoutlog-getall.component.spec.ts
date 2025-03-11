import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutlogGetallComponent } from './workoutlog-getall.component';

describe('WorkoutlogGetallComponent', () => {
  let component: WorkoutlogGetallComponent;
  let fixture: ComponentFixture<WorkoutlogGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutlogGetallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutlogGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
