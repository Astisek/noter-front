'use client';
import { IServerError } from '@/api/models';
import { routerLinks } from '@/data/router';
import { RecaptchaEnum } from '@/models/recaptcha.enum';
import { LoginPage } from '@/screens/Login/components/LoginPage';
import { useLogin } from '@/screens/Login/hooks/useLogin';
import { ILoginForm } from '@/screens/Login/models/login.model';
import { loginSchema } from '@/screens/Login/schemas/login.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormProvider, useForm } from 'react-hook-form';

export const Login = () => {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' } as ILoginForm,
  });

  const onLogin = () => {
    router.push(routerLinks.category());
  };

  const { mutate, error, isPending } = useLogin(onLogin);

  const onSubmit = async (values: ILoginForm) => {
    const token = await executeRecaptcha(RecaptchaEnum.Login);
    mutate({ ...values, token });
  };
  const errorMessage = (error as IServerError)?.response?.data?.message;

  return (
    <FormProvider {...methods}>
      <LoginPage isLoading={isPending} onSubmit={onSubmit} errorMessage={errorMessage} />
    </FormProvider>
  );
};
