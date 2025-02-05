import { categoryApi } from '@/api/category';
import { useCategoryStore } from '@/stores/category.store';
import { useMutation } from '@tanstack/react-query';

export const useUpdateCategory = (onSuccess: () => void) => {
  const { updateCategory } = useCategoryStore();
  return useMutation({
    mutationFn: categoryApi.update,
    mutationKey: ['category', 'update'],
    onSuccess: ({ data }, { id }) => {
      onSuccess();
      updateCategory(id, data);
    },
  });
};
