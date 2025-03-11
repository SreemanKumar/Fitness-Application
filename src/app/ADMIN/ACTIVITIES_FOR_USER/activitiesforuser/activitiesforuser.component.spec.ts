import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesforuserComponent } from './activitiesforuser.component';

describe('ActivitiesforuserComponent', () => {
  let component: ActivitiesforuserComponent;
  let fixture: ComponentFixture<ActivitiesforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesforuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
