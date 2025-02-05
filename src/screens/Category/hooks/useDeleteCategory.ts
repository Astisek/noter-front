import { categoryApi } from '@/api/category';
import { useCategoryStore } from '@/stores/category.store';
import { useMutation } from '@tanstack/react-query';

export const useDeleteCategory = () => {
  const { deleteCategory } = useCategoryStore();

  return useMutation({
    mutationFn: categoryApi.delete,
    mutationKey: ['category', 'delete'],
    onSuccess: (_, id) => deleteCategory(id),
  });
};
