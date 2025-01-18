import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { routerLinks } from '@/data/router';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-md w-full mx-auto flex justify-center flex-col h-screen items-center">
      <h2 className="text-text text-4xl text-center font-bold mb-6">
        Sign in to your account
      </h2>
      <form className="w-full flex flex-col gap-3">
        <Field label="Email" type='email' />
        <Field label="Password" type="password" />

        <Button>Sign in</Button>

        <p className="text-gray-600 text-xl text-center">
          Dont&apos;t have an account?{' '}
          <Link className="text-hover" href={routerLinks.register}>
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
