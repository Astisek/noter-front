import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { routerLinks } from '@/data/router';
import { ILoginForm } from '@/screens/Login/models/login.model';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

interface LoginPageProps {
  isLoading: boolean;
  onSubmit: (values: ILoginForm) => void;
  errorMessage?: string;
}

export const LoginPage = ({ isLoading, onSubmit, errorMessage }: LoginPageProps) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext<ILoginForm>();

  return (
    <div className="max-w-md w-full mx-auto flex justify-center flex-col h-screen items-center">
      <h2 className="text-text text-4xl text-center font-bold mb-6">Sign in to your account</h2>
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <Field name="email" label="Email" type="email" error={errors?.email?.message} />
        <Field name="password" label="Password" type="password" error={errors?.password?.message} />

        {!!errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <Button isLoading={isLoading}>Sign in</Button>

        <p className="text-gray-600 text-xl text-center">
          Dont&apos;t have an account?{' '}
          <Link className="text-hover" href={routerLinks.register()}>
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};
