import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesForUserGetIdComponent } from './activitiesforuser-getid.component';

describe('ActivitiesforuserGetidComponent', () => {
  let component: ActivitiesForUserGetIdComponent;
  let fixture: ComponentFixture<ActivitiesForUserGetIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesForUserGetIdComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ActivitiesForUserGetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
