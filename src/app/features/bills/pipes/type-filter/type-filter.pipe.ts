import { Pipe, PipeTransform } from '@angular/core';

const typeOptions: Record<number, string> = {
  1: 'Atrasado',
  2: 'Vence Hoje',
  3: 'Em dia',
};

@Pipe({
  name: 'typeFilter',
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: number): string {
    return typeOptions[value];
  }
}
