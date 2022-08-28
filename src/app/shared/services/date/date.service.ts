import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public getDate(date: string): number {
    return new Date(date).getDate();
  }

  public padTo2Digits(value: number) {
    return value.toString().padStart(2, '0');
  }

  public formatDate(date: Date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  public getDay(date: string): number {
    return Number(date.split('/')[0]);
  }
}
