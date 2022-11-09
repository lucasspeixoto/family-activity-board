import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  /**
   * @description
   * Transforma uma data en formato de string
   * e retorna o ano correspondente
   * @name getDate
   * @access public
   * @param {string} date
   * @return {number}
   *
   */
  public getDate(date: string): number {
    return new Date(date).getDate();
  }

  /**
   * @description
   * Transforma um número (dia ou mês) em uma string
   * de 2 digitos (9 -> '09', 11 -> '11')
   * @name padTo2Digits
   * @access public
   * @param {number} value
   * @return {string}
   */
  public padTo2Digits(value: number): string {
    return value.toString().padStart(2, '0');
  }

  /**
   * @description
   * A partir de uma data do tipo Date retorna
   * essa data em formato string dd/mm/yyyy
   * @name formatDate
   * @access public
   * @param {Date} date
   * @return {string}
   */
  public formatDate(date: Date): string {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  /**
   * @description
   * A partir de uma data do tipo string dd/mm/yyyy
   * retorna o dia como um number
   * @name getDay
   * @access public
   * @param {string} date
   * @return {number}
   */
  public getDay(date: string): number {
    return Number(date.split('/')[0]);
  }
}
