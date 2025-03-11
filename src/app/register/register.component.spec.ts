import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../Services/api.service';
import { of, throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let fixture: any;
  let component: any;
  let apiService: any;

  beforeEach(async () => {
    const apiServiceMock = {
      register: jasmine.createSpy('register') 
    };

    await TestBed.configureTestingModule({
      imports: [
        RegisterComponent,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        provideRouter([]), // Use provideRouter instead of RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should register user and navigate to login page on success', () => {
    apiService.register.and.returnValue(of({ message: 'User registered successfully' }));

    spyOn(component['router'], 'navigate');
    component.username = 'testuser';
    component.password = 'password123';
    component.role = 'ROLE_USER';
    component.onSubmit();

    expect(apiService.register).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password123',
      roles: ['ROLE_USER']
    });

    

    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should register admin and navigate to admin page on success', () =>{
    apiService.register.and.returnValue(of({ message: 'User registered successfully' }));

    spyOn(component['router'], 'navigate');
    component.username = 'testadmin';
    component.password = 'password123';
    component.role = 'ROLE_ADMIN';
    component.onSubmit();

    expect(apiService.register).toHaveBeenCalledWith({
      username: 'testadmin',
      password:'password123',
      roles: ['ROLE_ADMIN']
    });
    
    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);


  });


  it('should handle registration error', () => {
    spyOn(console, 'error');
    apiService.register.and.returnValue(throwError(() => new Error('Registration failed')));

    component.onSubmit();

    expect(console.error).toHaveBeenCalledWith('Error registering user', jasmine.any(Error));
  });
});