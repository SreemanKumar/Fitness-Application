import { TestBed } from '@angular/core/testing';

import { HealthMetricsService } from './healthmetrics.service';

describe('HealthmetricsService', () => {
  let service: HealthMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
