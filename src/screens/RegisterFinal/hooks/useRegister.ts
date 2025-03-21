import { authApi } from '@/api/auth';
import { routerLinks } from '@/data/router';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: authApi.registerFinal,
    mutationKey: ['register'],
    onSuccess: () => {
      router.push(routerLinks.category());
    },
  });
};
