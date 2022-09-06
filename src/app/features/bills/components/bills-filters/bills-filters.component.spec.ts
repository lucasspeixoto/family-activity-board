import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsFiltersComponent } from './bills-filters.component';

describe('BillsFiltersComponent', () => {
  let component: BillsFiltersComponent;
  let fixture: ComponentFixture<BillsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillsFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
