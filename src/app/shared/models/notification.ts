export interface NotificationsDescriptions {
  icon: string;
  value: number;
  message: string;
  class: string;
}

export interface Notification {
  amount: number;
  description: NotificationsDescriptions[];
}
