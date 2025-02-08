import { userApi } from '@/api/user';
import { ClientLoginProvider } from '@/components/ClientLoginProvider';
import { routerLinks } from '@/data/router';
import { authConfig } from '@/utils/authOptions';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const LoginProvider = async ({ children }: PropsWithChildren) => {
  try {
    const response = await userApi.profile(await authConfig());
    return <ClientLoginProvider userProfile={response.data}>{children}</ClientLoginProvider>;
  } catch (_) {
    redirect(routerLinks.login());
  }
};
