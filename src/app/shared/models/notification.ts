export interface NotificationsDescriptions {
  icon: string;
  value: number;
  message: string;
  color: string;
}

export interface Notification {
  amount: number;
  description: NotificationsDescriptions[];
}
