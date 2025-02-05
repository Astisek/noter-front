import { NoteLayout } from '@/screens/NoteView/components/NoteLayout';
import { PropsWithChildren } from 'react';

interface LayoutProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const Layout = async ({ children, params }: PropsWithChildren<LayoutProps>) => {
  const { categoryId } = await params;

  return <NoteLayout categoryId={categoryId}>{children}</NoteLayout>;
};

export default Layout;
