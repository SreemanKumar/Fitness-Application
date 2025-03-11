import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDietplanComponent } from './crud-dietplan.component';

describe('CrudDietplanComponent', () => {
  let component: CrudDietplanComponent;
  let fixture: ComponentFixture<CrudDietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudDietplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudDietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
