import Link from 'next/link';

export const NoteItem = () => {
  return (
    <Link
      href={'#'}
      className="py-3 px-2 text-text flex items-center hover:bg-primary transition-colors rounded justify-between gap-3"
    >
      <div className="text-ellipsis overflow-hidden">
        NoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItemNoteItem
      </div>
      <div className="flex gap-3 items-center">
        <p className="border border-text px-2 rounded-sm">
          5<span className="text-gray-400">/10</span>
        </p>
        <p className="text-gray-400">20.12.2024</p>
      </div>
    </Link>
  );
};
