import { Pipe, PipeTransform } from '@angular/core';

const Status: Record<number, string> = {
  1: 'Contas (Ex: Energia, água, etc...',
  2: 'Cartão de Crédito',
  3: 'Faculdade',
  4: 'Cartão Supermercado',
};

@Pipe({
  name: 'statusFilter',
})
export class StatusFilterPipe implements PipeTransform {
  transform(value: number): string {
    return Status[value];
  }
}
