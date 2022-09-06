import { Bill } from './bills.model';

export interface UpdateBillData {
  type: 'add' | 'edit';
  bill: Bill;
}
