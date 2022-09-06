export interface Bill {
  title: string | undefined;
  type: number;
  value: number;
  spent: number;
  date: string | Date;
  owner: string;
  billId?: string;
}
