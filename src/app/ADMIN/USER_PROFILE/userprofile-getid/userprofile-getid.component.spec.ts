import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileGetidComponent } from './userprofile-getid.component';

describe('UserprofileGetidComponent', () => {
  let component: UserprofileGetidComponent;
  let fixture: ComponentFixture<UserprofileGetidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofileGetidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofileGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
