import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesForUserUserIdComponent } from './activitiesforuser-userid.component';

describe('ActivitiesforuserUseridComponent', () => {
  let component: ActivitiesForUserUserIdComponent;
  let fixture: ComponentFixture<ActivitiesForUserUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesForUserUserIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesForUserUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
