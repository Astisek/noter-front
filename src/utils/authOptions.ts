'use server';
import { AxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';

export const authConfig = async (): Promise<AxiosRequestConfig> => {
  const cookie = await cookies();

  return { headers: { Cookie: cookie.toString() } };
};
