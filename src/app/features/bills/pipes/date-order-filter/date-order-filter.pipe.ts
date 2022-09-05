import { Pipe, PipeTransform } from '@angular/core';

import { Bill } from '@billsMd/bills.model';
import { getDateFromString } from '@sharedH/date.helper';

@Pipe({
  name: 'dateOrderFilter',
})
export class DateOrderFilterPipe implements PipeTransform {
  public transform(bills: Bill[]): Bill[] {
    const copiedBills = [...bills];
    return copiedBills.sort((first, second) =>
      getDateFromString(first.date) > getDateFromString(second.date) ? 1 : -1
    );
  }
}
