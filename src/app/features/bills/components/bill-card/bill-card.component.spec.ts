/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCardComponent } from './bill-card.component';

describe('BillCardComponent', () => {
  let component: BillCardComponent;
  let fixture: ComponentFixture<BillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
