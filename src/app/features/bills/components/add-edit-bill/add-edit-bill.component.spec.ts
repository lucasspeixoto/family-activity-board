import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBillComponent } from './add-edit-bill.component';

describe('AddBillComponent', () => {
  let component: AddEditBillComponent;
  let fixture: ComponentFixture<AddEditBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditBillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
