import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsGetAllComponent } from './achievements-getall.component';

describe('AchievementsGetallComponent', () => {
  let component: AchievementsGetAllComponent;
  let fixture: ComponentFixture<AchievementsGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsGetAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
