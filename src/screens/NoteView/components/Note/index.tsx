import { INote } from '@/api/models/note';
import { routerLinks } from '@/data/router';
import { DateTime } from 'luxon';
import Link from 'next/link';

interface NoteProps {
  note: INote;
}

export const Note = ({ note: { rate, title, updated_at, category, id } }: NoteProps) => (
  <Link
    href={routerLinks.noteView(category.id, id)}
    className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
  >
    <div className="text-ellipsis overflow-hidden">{title}</div>
    <div className="flex gap-3 items-center">
      <p className="border border-text px-2 rounded-sm">
        {rate || '?'}
        <span className="text-gray-400">/10</span>
      </p>
      <p className="text-gray-400">{DateTime.fromISO(updated_at).toFormat('dd.MM')}</p>
    </div>
  </Link>
);
