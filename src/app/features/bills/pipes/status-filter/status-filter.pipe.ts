import { Pipe, PipeTransform } from '@angular/core';

const Status: Record<number, string> = {
  0: 'Contas (Ex: Energia, água, etc...',
  1: 'Cartão de Crédito',
  2: 'Faculdade',
  3: 'Cartão Supermercado',
};

@Pipe({
  name: 'statusFilter',
})
export class StatusFilterPipe implements PipeTransform {
  transform(value: number): string {
    return Status[value];
  }
}
