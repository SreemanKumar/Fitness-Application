import { TestBed } from '@angular/core/testing';
import { ActivityService } from './activitiesforuser.service';

//import { ActivitiesforuserService } from './activitiesforuser.service';

describe('ActivitiesforuserService', () => {
  let service: ActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
