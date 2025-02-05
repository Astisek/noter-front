import { LoginProvider } from '@/components/LoginProvider';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <LoginProvider>{children}</LoginProvider>;
}
