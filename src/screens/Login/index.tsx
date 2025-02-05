'use client';
import { IServerError } from '@/api/models';
import { routerLinks } from '@/data/router';
import { LoginPage } from '@/screens/Login/components/LoginPage';
import { useLogin } from '@/screens/Login/hooks/useLogin';
import { ILoginForm } from '@/screens/Login/models/login.model';
import { loginSchema } from '@/screens/Login/schemas/login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

export const Login = () => {
  const router = useRouter();

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' } as ILoginForm,
  });

  const onLogin = () => {
    router.push(routerLinks.category());
  };

  const { mutate, error, isPending } = useLogin(onLogin);

  const onSubmit = (values: ILoginForm) => {
    mutate(values);
  };
  const errorMessage = (error as IServerError)?.response?.data?.message;

  return (
    <FormProvider {...methods}>
      <LoginPage isLoading={isPending} onSubmit={onSubmit} errorMessage={errorMessage} />
    </FormProvider>
  );
};
