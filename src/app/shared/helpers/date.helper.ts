export const getRangeValidation = (
  start: number,
  end: number,
  value: number
): boolean => {
  return value > start && value <= end ? true : false;
};

export const getDateFromString = (date: Date | string): number => {
  const dateAsString = date as string;
  const [day, month, year] = dateAsString.split('/');

  const dayWithoutHours = new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  );
  return dayWithoutHours.setHours(0, 0, 0, 0);
};

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
