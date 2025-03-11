import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesForUserDeleteIdComponent } from './activitiesforuser-deleteid.component';

describe('ActivitiesforuserDeleteidComponent', () => {
  let component: ActivitiesForUserDeleteIdComponent;
  let fixture: ComponentFixture<ActivitiesForUserDeleteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesForUserDeleteIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesForUserDeleteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
