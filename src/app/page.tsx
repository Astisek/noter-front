'use client';
import { routerLinks } from '@/data/router';
import { localStorageManager } from '@/utils/localStorage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    if (localStorageManager.token) {
      router.push(routerLinks.app);
    }
    router.push(routerLinks.login);
  }, [router]);

  return <></>;
}
