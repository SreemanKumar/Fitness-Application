import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsDeleteidComponent } from './achievements-deleteid.component';

describe('AchievementsDeleteidComponent', () => {
  let component: AchievementsDeleteidComponent;
  let fixture: ComponentFixture<AchievementsDeleteidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsDeleteidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsDeleteidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
