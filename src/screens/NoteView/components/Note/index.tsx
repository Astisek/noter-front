import { INote } from '@/api/models/note';
import { TimeFormatter } from '@/components/TimeFormatter';
import { routerLinks } from '@/data/router';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface NoteProps {
  note: INote;
}

export const Note = ({ note: { rate, title, updated_at, category, id } }: NoteProps) => {
  const { noteId } = useParams<{ noteId: string }>();

  return (
    <Link
      href={routerLinks.noteView(category.id, id)}
      className={classNames(
        'py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3',
        { ['bg-primary']: id === noteId },
      )}
    >
      <div className="text-ellipsis overflow-hidden">{title}</div>
      <div className="flex gap-3 items-center shrink-0">
        <p className="border border-text px-2 rounded-md">
          {rate || '?'}
          <span className="text-gray-400">/10</span>
        </p>
        <p className="text-gray-400">
          <TimeFormatter isoTime={updated_at} />
        </p>
      </div>
    </Link>
  );
};
