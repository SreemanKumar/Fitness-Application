import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileGetAllComponent } from './userprofile-getall.component';

describe('UserprofileGetallComponent', () => {
  let component: UserProfileGetAllComponent;
  let fixture: ComponentFixture<UserProfileGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileGetAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
