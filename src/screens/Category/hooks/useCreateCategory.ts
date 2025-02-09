import { categoryApi } from '@/api/category';
import { ICategory } from '@/api/models/category';
import { NotificationEnum } from '@/models/notifications.model';
import { useNotificationStore } from '@/stores/notification.store';
import { useMutation } from '@tanstack/react-query';

export const useCreateCategory = (onSuccess: (category: ICategory) => void) => {
  const { addNotification } = useNotificationStore();
  return useMutation({
    mutationFn: categoryApi.create,
    mutationKey: ['category', 'create'],
    onSuccess: (response) => {
      onSuccess(response.data);
      addNotification({ variant: NotificationEnum.Success, text: 'Category created!' });
    },
  });
};
