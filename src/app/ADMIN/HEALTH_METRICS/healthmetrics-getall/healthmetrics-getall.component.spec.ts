import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMetricsGetAllComponent } from './healthmetrics-getall.component';

describe('HealthmetricsGetallComponent', () => {
  let component: HealthMetricsGetAllComponent;
  let fixture: ComponentFixture<HealthMetricsGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthMetricsGetAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthMetricsGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
