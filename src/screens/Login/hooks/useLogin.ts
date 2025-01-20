import { authApi } from '@/api/auth';
import { localStorageManager } from '@/utils/localStorage';
import { useMutation } from '@tanstack/react-query';

export const useLogin = (onSuccess: () => void) =>
  useMutation({
    mutationFn: authApi.login,
    mutationKey: ['login'],
    onSuccess: ({ data }) => {
      localStorageManager.token = data.access_token;
      onSuccess();
    },
  });
