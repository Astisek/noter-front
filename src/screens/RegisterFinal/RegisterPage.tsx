import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { routerLinks } from '@/data/router';
import { IRegisterForm } from '@/screens/RegisterFinal/models/register.model';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

interface RegisterPageProps {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (values: IRegisterForm) => void;
}

export const RegisterPage = ({ errorMessage, isLoading, onSubmit }: RegisterPageProps) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext<IRegisterForm>();

  return (
    <div className="max-w-md root-container flex justify-center flex-col h-screen items-center">
      <h2 className="text-text text-4xl text-center font-bold mb-6">Create an account</h2>
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <Field label="Email" type="email" name="email" disabled error={errors?.email?.message} />
        </div>

        <Field label="Login" name="login" error={errors?.login?.message} />
        <Field label="Password" type="password" name="password" error={errors?.password?.message} />
        <Field label="Repeat Password" type="password" name="repeatPassword" error={errors?.repeatPassword?.message} />

        {!!errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <Button isLoading={isLoading}>Sign up</Button>

        <p className="text-gray-600 text-xl text-center">
          Already have an account?{' '}
          <Link className="text-hover" href={routerLinks.login()}>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
