import { TestBed } from '@angular/core/testing';

import { AchievementService } from './achievements.service';

describe('AchievementsService', () => {
  let service: AchievementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
