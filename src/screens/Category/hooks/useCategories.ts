import { categoryApi } from '@/api/category';
import { ICategoryRequest } from '@/api/models/category';
import { useCategoryStore } from '@/stores/category.store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useCategories = (params: ICategoryRequest) => {
  const { setCategories } = useCategoryStore();

  const result = useQuery({
    queryFn: () => categoryApi.findAll(params),
    queryKey: ['category-all', params],
  });

  useEffect(() => {
    if (result.isSuccess) {
      setCategories(result.data.data);
    }
  }, [result.data, result.isSuccess, setCategories]);

  return result;
};
