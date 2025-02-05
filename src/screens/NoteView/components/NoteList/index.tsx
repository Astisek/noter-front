import { Note } from '@/screens/NoteView/components/Note';

export const NoteList = () => {
  return (
    <div className="flex-1 overflow-y-auto scroll">
      <Note />
    </div>
  );
};

/* <div>
      <p className="text-sm px-2 py-1 text-gray-400 text-center">Empty</p>
    </div> */
