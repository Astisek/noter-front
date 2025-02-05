'use server';
import { routerLinks } from '@/data/router';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const logout = async () => {
  const cookie = await cookies();
  cookie.delete('token');

  redirect(routerLinks.login());
};
