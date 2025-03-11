import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileDeleteallComponent } from './userprofile-deleteall.component';

describe('UserprofileDeleteallComponent', () => {
  let component: UserprofileDeleteallComponent;
  let fixture: ComponentFixture<UserprofileDeleteallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofileDeleteallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofileDeleteallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
