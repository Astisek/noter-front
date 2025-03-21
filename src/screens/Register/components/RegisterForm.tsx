import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { routerLinks } from '@/data/router';
import { IRegisterEmail } from '@/screens/Register/models/register-email.models';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

interface RegisterFormProps {
  isLoading: boolean;
  onSubmit: (form: IRegisterEmail) => void;
  errorMessage: string;
}

export const RegisterForm = ({ isLoading, onSubmit, errorMessage }: RegisterFormProps) => {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext<IRegisterEmail>();

  return (
    <div className="max-w-md root-container flex justify-center flex-col h-screen items-center">
      <h2 className="text-text text-4xl text-center font-bold mb-6">Create an account</h2>
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <Field label="Email" type="email" name="email" error={errors?.email?.message} />

        {!!errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <Button isLoading={isLoading}>Continue</Button>

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
