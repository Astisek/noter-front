'use client';
import { IServerError } from '@/api/models';
import { routerLinks } from '@/data/router';
import { useRegisterContext } from '@/hooks/useRegisterContext';
import { RecaptchaEnum } from '@/models/recaptcha.enum';
import { useRegister } from '@/screens/RegisterFinal/hooks/useRegister';
import { IRegisterForm } from '@/screens/RegisterFinal/models/register.model';
import { RegisterPage } from '@/screens/RegisterFinal/RegisterPage';
import { registerSchema } from '@/screens/RegisterFinal/schemas/register.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormProvider, useForm } from 'react-hook-form';

export const RegisterFinal = () => {
  const { email } = useRegisterContext();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(registerSchema),
    defaultValues: { email, login: '', password: '', repeatPassword: '', code: '' } as IRegisterForm,
  });

  const { isPending, mutate, error } = useRegister();

  useEffect(() => {
    if (!email) {
      router.push(routerLinks.register());
    }
  }, [email, router]);

  const onSubmit = async ({ login, ...registerForm }: IRegisterForm) => {
    const token = await executeRecaptcha(RecaptchaEnum.RegisterFinal);

    mutate({ username: login, token, ...registerForm });
  };

  const errorMessage = (error as IServerError)?.response?.data?.message;

  return (
    <FormProvider {...methods}>
      <RegisterPage isLoading={isPending} onSubmit={onSubmit} errorMessage={errorMessage} />
    </FormProvider>
  );
};
