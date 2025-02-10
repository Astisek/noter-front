import { INotificationStore, NotificationEnum } from '@/models/notifications.model';
import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: process.env.SERVER_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

export const setupInterceptors = (
  createNotification: INotificationStore['addNotification'],
  redirectToLogin: () => void,
) => {
  api.interceptors.response.use(
    (res) => res,
    (e: AxiosError) => {
      if (e.status === 500) {
        createNotification({
          text: e.message,
          variant: NotificationEnum.Error,
        });
      }
      if (e.status === 401) {
        redirectToLogin();
      }
      throw e;
    },
  );
};
