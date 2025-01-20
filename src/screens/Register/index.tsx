import { useRegister } from '@/screens/Register/hooks/useRegister';
import { IRegisterForm } from '@/screens/Register/models/register.model';
import { RegisterPage } from '@/screens/Register/RegisterPage';
import { registerSchema } from '@/screens/Register/schemas/register.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const Register = () => {
  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(registerSchema),
    defaultValues: { email: '', login: '', password: '', repeatPassword: '' } as IRegisterForm,
  });

  const { context, data, isPending, mutate } = useRegister();

  const onSubmit = useCallback(
    ({ email, login, password }: IRegisterForm) => {
      mutate({ email, password, username: login });
    },
    [mutate],
  );

  return (
    <FormProvider {...methods}>
      <RegisterPage isLoading={isPending} onSubmit={onSubmit} />
    </FormProvider>
  );
};
