import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileDeleteidComponent } from './userprofile-deleteid.component';

describe('UserprofileDeleteidComponent', () => {
  let component: UserprofileDeleteidComponent;
  let fixture: ComponentFixture<UserprofileDeleteidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofileDeleteidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofileDeleteidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
