/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomValidationMessageComponent } from './custom-validation-message.component';

describe('CustomValidationMessageComponent', () => {
  let component: CustomValidationMessageComponent;
  let fixture: ComponentFixture<CustomValidationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
