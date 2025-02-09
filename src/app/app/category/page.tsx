import { userApi } from '@/api/user';
import { defaultMetadata } from '@/data/app';
import { Category } from '@/screens/Category';
import { authConfig } from '@/utils/authOptions';
import { generateTitle } from '@/utils/generateTitle';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const profile = await userApi.profile(await authConfig());

  return {
    ...defaultMetadata,
    title: generateTitle(profile.data.username),
  };
};

export default function Page() {
  return <Category />;
}
