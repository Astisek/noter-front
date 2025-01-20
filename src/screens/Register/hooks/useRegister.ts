import { authApi } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

export const useRegister = (onSuccess: () => void) =>
  useMutation({
    mutationFn: authApi.register,
    mutationKey: ['register'],
    onSuccess,
  });
