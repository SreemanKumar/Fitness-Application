import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsGetUserIdComponent } from './achievements-getuserid.component';

describe('AchievementsGetuseridComponent', () => {
  let component: AchievementsGetUserIdComponent;
  let fixture: ComponentFixture<AchievementsGetUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsGetUserIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsGetUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
