'use client';
import { IServerError } from '@/api/models';
import { routerLinks } from '@/data/router';
import { useRegister } from '@/screens/Register/hooks/useRegister';
import { IRegisterForm } from '@/screens/Register/models/register.model';
import { RegisterPage } from '@/screens/Register/RegisterPage';
import { registerSchema } from '@/screens/Register/schemas/register.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

export const Register = () => {
  const router = useRouter();
  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(registerSchema),
    defaultValues: { email: '', login: '', password: '', repeatPassword: '' } as IRegisterForm,
  });

  const onRegister = () => {
    router.push(routerLinks.category());
  };

  const { isPending, mutate, error } = useRegister(onRegister);

  const onSubmit = ({ email, login, password }: IRegisterForm) => {
    mutate({ email, password, username: login });
  };

  const errorMessage = (error as IServerError)?.response?.data?.message;

  return (
    <FormProvider {...methods}>
      <RegisterPage isLoading={isPending} onSubmit={onSubmit} errorMessage={errorMessage} />
    </FormProvider>
  );
};
