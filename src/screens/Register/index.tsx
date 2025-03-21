'use client';
import { IServerError } from '@/api/models';
import { RecaptchaEnum } from '@/models/recaptcha.enum';
import { RegisterForm } from '@/screens/Register/components/RegisterForm';
import { useRegisterEmail } from '@/screens/Register/hooks/useRegisterEmail';
import { IRegisterEmail } from '@/screens/Register/models/register-email.models';
import { registerEmailSchema } from '@/screens/Register/schemas/registerEmail.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormProvider, useForm } from 'react-hook-form';

export const RegisterPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(registerEmailSchema),
    defaultValues: { email: '' } as IRegisterEmail,
  });

  const { mutate, isPending, error } = useRegisterEmail();

  const onSubmit = async (form: IRegisterEmail) => {
    const token = await executeRecaptcha(RecaptchaEnum.RegisterEmail);

    mutate({ ...form, token });
  };

  const errorMessage = (error as IServerError)?.response?.data?.message;

  return (
    <FormProvider {...methods}>
      <RegisterForm errorMessage={errorMessage} isLoading={isPending} onSubmit={onSubmit} />
    </FormProvider>
  );
};
