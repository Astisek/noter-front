'use client';
import { RegisterContextProvider } from '@/components/RegisterContext/RegisterContextProvider';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <RegisterContextProvider>{children}</RegisterContextProvider>;
}
