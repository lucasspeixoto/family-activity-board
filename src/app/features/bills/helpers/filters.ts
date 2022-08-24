import { Bill } from '@billsM/bills.model';

export const getRangeValidation = (
  start: number,
  end: number,
  value: number
): boolean => {
  return value > start && value <= end ? true : false;
};

export const getDate = (date: string): number => new Date(date).getDate();

export const filterByType = (items: Bill[], type: number | null): Bill[] => {
  let newBillsList = items;

  switch (type) {
    case 1:
    case 2:
    case 3:
    case 4:
      newBillsList = items.filter(bill => bill.type === type);
      break;
    default:
      newBillsList = items;
  }

  return newBillsList;
};

export const filterByStatus = (items: Bill[], type: number | null): Bill[] => {
  let newBillsList = items;
  const today = new Date().getDate();

  switch (type) {
    case 1:
      newBillsList = newBillsList.filter(bill => getDate(bill.date) < today);
      break;
    case 2:
      newBillsList = newBillsList.filter(bill => getDate(bill.date) === today);
      break;
    case 3:
      newBillsList = newBillsList.filter(bill => getDate(bill.date) > today);
      break;
    default:
  }

  return newBillsList;
};

export const filterByRange = (items: Bill[], type: number | null): Bill[] => {
  let newBillsList = items;

  switch (type) {
    case 1:
      newBillsList = newBillsList.filter(bill =>
        getRangeValidation(1, 50, bill.value)
      );
      break;
    case 2:
      newBillsList = newBillsList.filter(bill =>
        getRangeValidation(51, 200, bill.value)
      );
      break;
    case 3:
      newBillsList = newBillsList.filter(bill =>
        getRangeValidation(101, 200, bill.value)
      );
      break;
    case 4:
      newBillsList = newBillsList.filter(bill =>
        getRangeValidation(201, 500, bill.value)
      );
      break;
    case 5:
      newBillsList = newBillsList.filter(bill =>
        getRangeValidation(501, 1000, bill.value)
      );
      break;
    case 6:
      newBillsList = newBillsList.filter(bill => bill.value > 1000);
      break;
    default:
      newBillsList = newBillsList;
  }
  return newBillsList;
};
