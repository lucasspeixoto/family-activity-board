import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  public transform(value: string): string {
    const commaIndex: number = value.search('\\s');
    return String(value[0].toUpperCase()) + value[commaIndex + 1].toUpperCase();
  }
}
