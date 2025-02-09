import { categoryApi } from '@/api/category';
import { defaultMetadata } from '@/data/app';
import { authConfig } from '@/utils/authOptions';
import { generateTitle } from '@/utils/generateTitle';
import { Metadata, NextPage } from 'next';

type Props = {
  params: Promise<{ categoryId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { categoryId } = await params;
  const { data: category } = await categoryApi.findOne(categoryId, await authConfig());

  return {
    ...defaultMetadata,
    title: generateTitle(category.name),
  };
};

const Page: NextPage = () => (
  <div className="flex-1 h-screen hidden lg:flex items-center justify-center">
    <p className="text-gray-500 text-3xl">Select title</p>
  </div>
);

export default Page;
