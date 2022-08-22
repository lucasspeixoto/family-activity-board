import { Pipe, PipeTransform } from '@angular/core';

const typeOptions: Record<number, string> = {
  0: 'Atrasado',
  1: 'Pendente',
  2: 'Pago',
};

@Pipe({
  name: 'typeFilter',
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: number): string {
    return typeOptions[value];
  }
}
