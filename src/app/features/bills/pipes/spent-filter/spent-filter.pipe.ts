import { Pipe, PipeTransform } from '@angular/core';

const spentOptions: Record<number, string> = {
  1: 'Fixo',
  2: 'Variável',
};

@Pipe({
  name: 'spentFilter',
})
export class SpentFilterPipe implements PipeTransform {
  public transform(value: number): string {
    return spentOptions[value];
  }
}
