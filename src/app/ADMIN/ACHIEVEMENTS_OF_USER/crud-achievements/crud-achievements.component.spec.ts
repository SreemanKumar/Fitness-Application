import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAchievementsComponent } from './crud-achievements.component';

describe('CrudAchievementsComponent', () => {
  let component: CrudAchievementsComponent;
  let fixture: ComponentFixture<CrudAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
