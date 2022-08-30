/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditBillComponent } from './edit-bill.component';

describe('EditBillComponent', () => {
  let component: EditBillComponent;
  let fixture: ComponentFixture<EditBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
