export enum NotificationEnum {
  Error = 'error',
  Success = 'Success',
}

export interface INotification {
  text: string;
  variant: NotificationEnum;
  id: string;
  duration?: number;
}

interface INotificationState {
  notifications: INotification[];
}

export interface INotificationStore extends INotificationState {
  addNotification: (notification: Partial<Omit<INotification, 'id'>>) => void;
  removeNotification: (notificationId: string) => void;
}
