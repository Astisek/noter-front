import { defaultMetadata } from '@/data/app';
import { RegisterFinal } from '@/screens/RegisterFinal';
import { generateTitle } from '@/utils/generateTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: generateTitle('Create an account'),
};

export default function Page() {
  return <RegisterFinal />;
}
