import { categoryApi } from '@/api/category';
import { useQuery } from '@tanstack/react-query';

export const useCategory = (id: string) => useQuery({ queryFn: () => categoryApi.findOne(id), queryKey: ['category'] });
