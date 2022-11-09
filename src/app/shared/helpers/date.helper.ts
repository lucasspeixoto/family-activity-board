/**
 * @description
 * A partir de três valors, referência (value)
 * inicial (start) e final (end) retorna verdadeiro
 * se o valor estiver entre o incial e o final e
 * falso caso contrário
 * @name getRangeValidation
 * @param {number} start
 * @param {number} end
 * @param {number} value
 * @return {boolean}
 */
export const getRangeValidation = (
  start: number,
  end: number,
  value: number
): boolean => {
  return value > start && value <= end ? true : false;
};

/**
 * @description
 * A partir de uma data em formato dd/mm/yyyy
 * retorna a data em formato numérico com horas,
 * minutos e segundos zerados
 * @name getDateFromString
 * @param {string | Date} date
 * @return {number}
 */
export const getDateFromString = (date: string | Date): number => {
  const dateAsString = date as string;
  const [day, month, year] = dateAsString.split('/');

  const dayWithoutHours = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  );
  return dayWithoutHours.setHours(0, 0, 0, 0);
};

/**
 * @description
 * A partir de uma data em formato dd/mm/yyyy
 * retorna a data do próximo mês em formato
 * numérico com horas, minutos e segundos zerados
 * @name getNextMonthDateFromString
 * @param {Date | string} date
 * @return {number}
 */
export const getNextMonthDateFromString = (date: string | Date): number => {
  const dateAsString = date as string;
  const [day, month, year] = dateAsString.split('/');

  let dayWithoutHours;

  if (Number(month) === 12) {
    dayWithoutHours = new Date(Number(year) + 1, 0, Number(day));
  } else {
    dayWithoutHours = new Date(Number(year), Number(month), Number(day));
  }

  return dayWithoutHours.setHours(0, 0, 0, 0);
};

/**
 * @description
 * A partir de uma data em formato dd/mm/yyyy
 * retorna a representação numérica (1, 2 ou 3)
 * para o status dessa data, ou seja, em dia,
 * atrasado ou hoje
 * @name getDateStatus
 * @param {Date | string} date
 * @return {number}
 */
export const getDateStatus = (date: string | Date): number => {
  const today = new Date().setHours(0, 0, 0, 0);

  if (getDateFromString(date) < today) {
    return 1;
  } else if (getDateFromString(date) === today) {
    return 2;
  } else {
    return 3;
  }
};
