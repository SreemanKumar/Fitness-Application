import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthmetricsComponent } from './healthmetrics.component';

describe('HealthmetricsComponent', () => {
  let component: HealthmetricsComponent;
  let fixture: ComponentFixture<HealthmetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthmetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
