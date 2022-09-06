/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('Service: Date', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService],
    });
  });

  it('should ...', inject([DateService], (service: DateService) => {
    expect(service).toBeTruthy();
  }));
});
