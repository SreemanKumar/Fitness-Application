import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLogComponent } from './workoutlog.component';

describe('WorkoutlogComponent', () => {
  let component: WorkoutLogComponent;
  let fixture: ComponentFixture<WorkoutLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutLogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkoutLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
