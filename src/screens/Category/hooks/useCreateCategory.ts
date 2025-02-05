import { categoryApi } from '@/api/category';
import { ICategory } from '@/api/models/category';
import { useMutation } from '@tanstack/react-query';

export const useCreateCategory = (onSuccess: (category: ICategory) => void) =>
  useMutation({
    mutationFn: categoryApi.create,
    mutationKey: ['category', 'create'],
    onSuccess: (response) => {
      onSuccess(response.data);
    },
  });
