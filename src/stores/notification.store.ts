import { INotification, INotificationStore, NotificationEnum } from '@/models/notifications.model';
import { create } from 'zustand';
import { v7 } from 'uuid';

const createDefaultNotification = (): INotification => ({
  id: v7(),
  text: '',
  variant: NotificationEnum.Error,
  duration: 4000,
});

export const useNotificationStore = create<INotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({ notifications: [...state.notifications, { ...createDefaultNotification(), ...notification }] })),
  removeNotification: (notificationId: string) =>
    set((state) => ({ notifications: state.notifications.filter(({ id }) => id !== notificationId) })),
}));
