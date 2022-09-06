import { inject, TestBed } from '@angular/core/testing';

import { BillService } from './bill.service';

describe('Service: Bill', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillService],
    });
  });

  it('should ...', inject([BillService], (service: BillService) => {
    expect(service).toBeTruthy();
  }));
});
