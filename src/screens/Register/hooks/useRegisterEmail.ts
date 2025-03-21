import { authApi } from '@/api/auth';
import { routerLinks } from '@/data/router';
import { useRegisterContext } from '@/hooks/useRegisterContext';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useRegisterEmail = () => {
  const router = useRouter();
  const { setEmail } = useRegisterContext();

  return useMutation({
    mutationKey: ['register-email'],
    mutationFn: authApi.registerEmail,
    onSuccess: (_, { email }) => {
      setEmail(email);
      router.push(routerLinks.registerFinal());
    },
  });
};
