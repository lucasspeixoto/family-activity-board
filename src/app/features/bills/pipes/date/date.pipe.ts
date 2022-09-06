import { Pipe, PipeTransform } from '@angular/core';

import { getDateFromString } from '@sharedH/date.helper';

@Pipe({
  name: 'dateStatus',
})
export class DatePipe implements PipeTransform {
  public transform(date: string): string {
    const today = new Date().setHours(0, 0, 0, 0);

    if (getDateFromString(date) > today) {
      return `${date} | Em dia`;
    } else if (getDateFromString(date) === today) {
      return `${date} | Pagar Hoje`;
    } else {
      return `${date} | Vencida`;
    }
  }
}
