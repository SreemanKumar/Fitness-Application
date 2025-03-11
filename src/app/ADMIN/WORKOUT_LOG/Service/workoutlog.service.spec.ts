import { TestBed } from '@angular/core/testing';

import { WorkoutLogService } from './workoutlog.service';

describe('WorkoutlogService', () => {
  let service: WorkoutLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
