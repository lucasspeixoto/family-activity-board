import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent',
})
export class PercentPipe implements PipeTransform {
  public transform(value: number): string {
    const percent = 100 * value;
    return `${Math.floor(percent).toString()}`;
  }
}
