import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplandeleteidComponent } from './dietplan-deleteid.component';

describe('DietplanDeleteidComponent', () => {
  let component: DietplandeleteidComponent;
  let fixture: ComponentFixture<DietplandeleteidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietplandeleteidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplandeleteidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
