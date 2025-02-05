import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { routerLinks } from '@/data/router';
import { IRegisterForm } from '@/screens/Register/models/register.model';
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
    register,
    formState: { errors },
  } = useFormContext<IRegisterForm>();

  return (
    <div className="max-w-md w-full mx-auto flex justify-center flex-col h-screen items-center">
      <h2 className="text-text text-4xl text-center font-bold mb-6">Create an account</h2>
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <Field label="Email" type="email" {...register('email')} error={errors?.email?.message} />
        <Field label="Login" {...register('login')} error={errors?.login?.message} />
        <Field label="Password" type="password" {...register('password')} error={errors?.password?.message} />
        <Field
          label="Repeat Password"
          type="password"
          {...register('repeatPassword')}
          error={errors?.repeatPassword?.message}
        />

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
