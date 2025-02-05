import { userApi } from '@/api/user';
import { ClientLoginProvider } from '@/components/ClientLoginProvider';
import { routerLinks } from '@/data/router';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const LoginProvider = async ({ children }: PropsWithChildren) => {
  try {
    const cookie = await cookies();

    const response = await userApi.profile({ headers: { Cookie: cookie.toString() } });
    return <ClientLoginProvider userProfile={response.data}>{children}</ClientLoginProvider>;
  } catch (_) {
    redirect(routerLinks.login());
  }
};
