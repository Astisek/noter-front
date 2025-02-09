'use client';
import { setupInterceptors } from '@/api';
import { NotificationController } from '@/components/NotificationController';
import { routerLinks } from '@/data/router';
import { useNotificationStore } from '@/stores/notification.store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

const queryClient = new QueryClient();

export const ClientProvider = ({ children }: PropsWithChildren) => {
  const { addNotification } = useNotificationStore();
  const router = useRouter();

  useEffect(() => {
    setupInterceptors(addNotification, () => router.push(routerLinks.login()));
  }, [addNotification, router]);

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <NotificationController />
    </>
  );
};
