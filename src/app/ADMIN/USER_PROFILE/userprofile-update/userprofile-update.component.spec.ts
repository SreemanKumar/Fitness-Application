import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileUpdateComponent } from './userprofile-update.component';

describe('UserprofileUpdateComponent', () => {
  let component: UserprofileUpdateComponent;
  let fixture: ComponentFixture<UserprofileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofileUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
