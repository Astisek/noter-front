import { defaultMetadata } from '@/data/app';
import { Login } from '@/screens/Login';
import { generateTitle } from '@/utils/generateTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: generateTitle('Login'),
};

export default function Page() {
  return <Login />;
}
