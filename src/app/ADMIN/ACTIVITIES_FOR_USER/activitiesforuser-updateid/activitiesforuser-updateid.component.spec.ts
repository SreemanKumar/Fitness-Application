import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesforuserUpdateidComponent } from './activitiesforuser-updateid.component';

describe('ActivitiesforuserUpdateidComponent', () => {
  let component: ActivitiesforuserUpdateidComponent;
  let fixture: ComponentFixture<ActivitiesforuserUpdateidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesforuserUpdateidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesforuserUpdateidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
