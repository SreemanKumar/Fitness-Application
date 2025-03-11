import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudActivitiesforuserComponent } from './crud-activitiesforuser.component';

describe('CrudActivitiesforuserComponent', () => {
  let component: CrudActivitiesforuserComponent;
  let fixture: ComponentFixture<CrudActivitiesforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudActivitiesforuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudActivitiesforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
