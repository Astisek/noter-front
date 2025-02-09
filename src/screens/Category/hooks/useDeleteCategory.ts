import { categoryApi } from '@/api/category';
import { NotificationEnum } from '@/models/notifications.model';
import { useCategoryStore } from '@/stores/category.store';
import { useNotificationStore } from '@/stores/notification.store';
import { useMutation } from '@tanstack/react-query';

export const useDeleteCategory = () => {
  const { deleteCategory } = useCategoryStore();
  const { addNotification } = useNotificationStore();

  return useMutation({
    mutationFn: categoryApi.delete,
    mutationKey: ['category', 'delete'],
    onSuccess: (_, id) => {
      deleteCategory(id);
      addNotification({ variant: NotificationEnum.Success, text: 'Category deleted!' });
    },
  });
};
