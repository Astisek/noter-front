'use client';
import { setupInterceptors } from '@/api';
import { NotificationController } from '@/components/NotificationController';
import { routerLinks } from '@/data/router';
import { useNotificationStore } from '@/stores/notification.store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const queryClient = new QueryClient();

export const ClientProvider = ({ children }: PropsWithChildren) => {
  const { addNotification } = useNotificationStore();
  const router = useRouter();

  useEffect(() => {
    setupInterceptors(addNotification, () => router.push(routerLinks.login()));
  }, [addNotification, router]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
          {children}
        </GoogleReCaptchaProvider>
      </QueryClientProvider>
      <NotificationController />
    </>
  );
};
