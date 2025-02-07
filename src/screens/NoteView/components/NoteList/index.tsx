import { Note } from '@/screens/NoteView/components/Note';
import { useNoteStore } from '@/stores/note.store';

export const NoteList = () => {
  const { notes } = useNoteStore();

  return (
    <div className="flex-1 overflow-y-auto scroll">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {!notes.length && (
        <div>
          <p className="text-sm px-2 py-1 text-gray-400 text-center">Empty</p>
        </div>
      )}
    </div>
  );
};
