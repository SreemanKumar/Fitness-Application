import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWithlogoutComponent } from './navbar-withlogout.component';

describe('NavbarWithlogoutComponent', () => {
  let component: NavbarWithlogoutComponent;
  let fixture: ComponentFixture<NavbarWithlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarWithlogoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarWithlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
