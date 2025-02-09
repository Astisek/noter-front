import { NoteNotify } from '@/screens/NoteView/components/NoteNotify';
import { Actions } from './Actions';
import { Rate } from './Rate';
import { Title } from './Title';
import Link from 'next/link';
import { routerLinks } from '@/data/router';
import { useParams } from 'next/navigation';

export const NoteHeader = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  return (
    <div className="flex flex-col lg:flex-row relative">
      <Link
        className="text-text text-lg font-bold absolute w-10 h-10 cursor-pointer left-2 hover:scale-110 transition-transform -top-8 items-center justify-center lg:hidden flex"
        href={routerLinks.categoryView(categoryId)}
      >
        ←
      </Link>
      <Title />
      <div className="flex items-center gap-2 p-3 justify-end">
        <NoteNotify />
        <Rate />
        <Actions />
      </div>
    </div>
  );
};
