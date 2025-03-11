import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
//import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../Services/api.service';
import { of, throwError } from 'rxjs';
import { UtilitiesService } from '../Services/utilities.service';

fdescribe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let apiServices: any;
  //let api: any;
  beforeEach(async () => {
    const apiServiceMock = {
      login: jasmine.createSpy('login')
    };

    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        FormsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        provideRouter([]), 
      ]
    }).compileComponents();

   let fixture = TestBed.createComponent(LoginComponent);
   component = fixture.componentInstance;
   apiServices = TestBed.inject(ApiService);
    
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    //expect(component).toBeFalsy();
  });

  it('should navigate to user home on successfull login as ROLE_USER', () => {
    apiServices.login.and.returnValue(of({ roleName: 'ROLE_USER' }));

    spyOn(component['router'], 'navigate');
    component.login('testuser', 'password123');

    expect(component['router'].navigate).toHaveBeenCalledWith(['/home-user']);
  });

  it('should navigate to admin home on successfull login as ROLE_ADMIN', () => {
    apiServices.login.and.returnValue(of({ roleName: 'ROLE_ADMIN' }));

    spyOn(component['router'], 'navigate');
    component.login('adminuser', 'password123');

    expect(component['router'].navigate).toHaveBeenCalledWith(['/home-admin']);
  });

  it('should show alert on failed login', () => {
    spyOn(window, 'alert');
    apiServices.login.and.returnValue(throwError(() => new Error('Login failed')));

    component.login('wronguser', 'wrongpassword');

    expect(window.alert).toHaveBeenCalledWith('Login failed, Retry!');
  });
});