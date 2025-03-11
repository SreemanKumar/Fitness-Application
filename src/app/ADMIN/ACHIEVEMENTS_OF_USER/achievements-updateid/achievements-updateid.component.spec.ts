import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsUpdateidComponent } from './achievements-updateid.component';

describe('AchievementsUpdateidComponent', () => {
  let component: AchievementsUpdateidComponent;
  let fixture: ComponentFixture<AchievementsUpdateidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsUpdateidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsUpdateidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
