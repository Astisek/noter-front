import { categoryApi } from '@/api/category';
import { NotificationEnum } from '@/models/notifications.model';
import { useCategoryStore } from '@/stores/category.store';
import { useNotificationStore } from '@/stores/notification.store';
import { useMutation } from '@tanstack/react-query';

export const useUpdateCategory = (onSuccess: () => void) => {
  const { updateCategory } = useCategoryStore();
  const { addNotification } = useNotificationStore();
  return useMutation({
    mutationFn: categoryApi.update,
    mutationKey: ['category', 'update'],
    onSuccess: ({ data }, { id }) => {
      onSuccess();
      updateCategory(id, data);
      addNotification({ variant: NotificationEnum.Success, text: 'Category updated!' });
    },
  });
};
