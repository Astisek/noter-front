import { Button } from '@/components/Button';
import { Field } from '@/components/Field';
import { routerLinks } from '@/data/router';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-md w-full mx-auto flex justify-center flex-col h-screen items-center">
      <h2 className="text-text text-4xl text-center font-bold mb-6">
        Create an account
      </h2>
      <form className="w-full flex flex-col gap-3">
        <Field label="Email" type="email" />
        <Field label="Password" type="password" />
        <Field label="Repeat Password" type="password" />

        <Button>Sign up</Button>

        <p className="text-gray-600 text-xl text-center">
          Already have an account?{' '}
          <Link className="text-hover" href={routerLinks.login}>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
