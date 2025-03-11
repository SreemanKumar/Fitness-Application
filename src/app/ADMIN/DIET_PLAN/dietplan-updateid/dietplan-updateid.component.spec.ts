import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanUpdateidComponent } from './dietplan-updateid.component';

describe('DietplanUpdateidComponent', () => {
  let component: DietplanUpdateidComponent;
  let fixture: ComponentFixture<DietplanUpdateidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietplanUpdateidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietplanUpdateidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
