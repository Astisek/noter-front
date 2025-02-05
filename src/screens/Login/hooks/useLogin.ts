'use client';
import { authApi } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = (onSuccess: () => void) =>
  useMutation({
    mutationFn: authApi.login,
    mutationKey: ['login'],
    onSuccess,
  });
