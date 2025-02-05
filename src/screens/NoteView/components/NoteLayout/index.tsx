import { PropsWithChildren } from 'react';
import { NoteHeader } from '@/components/Header/NoteHeader';
import { CategoryControl } from '@/screens/NoteView/components/CategoryControl';
import { NoteList } from '@/screens/NoteView/components/NoteList';

interface NoteLayoutProps {
  categoryId: string;
}

export const NoteLayout = ({ children, categoryId }: PropsWithChildren<NoteLayoutProps>) => {
  return (
    <div className="w-full flex">
      <div className="w-1/4 min-w-80 bg-background-50 shadow-inner h-screen flex flex-col  gap-2">
        <NoteHeader />

        <CategoryControl />

        <NoteList />
      </div>
      {children}
    </div>
  );
};
