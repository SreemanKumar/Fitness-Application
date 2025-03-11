import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanGetidComponent } from './dietplan-getid.component';

describe('DietplanGetidComponent', () => {
  let component: DietplanGetidComponent;
  let fixture: ComponentFixture<DietplanGetidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietplanGetidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanGetidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
