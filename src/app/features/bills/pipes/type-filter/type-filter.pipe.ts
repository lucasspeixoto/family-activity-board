import { Pipe, PipeTransform } from '@angular/core';

const typeOptions: Record<number, string> = {
  1: 'Contas (Ex: Energia, água, etc...)',
  2: 'Cartão de Crédito',
  3: 'Faculdade',
  4: 'Cartão Supermercado',
};

@Pipe({
  name: 'typeFilter',
})
export class TypeFilterPipe implements PipeTransform {
  public transform(value: number): string {
    return typeOptions[value];
  }
}
