import { routerLinks } from '@/data/router';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  const cookie = await cookies();
  if (cookie.get('token')) {
    redirect(routerLinks.category());
  } else {
    redirect(routerLinks.login());
  }
}
