import { Note } from '@/screens/NoteView/components/Note';
import { useNoteStore } from '@/stores/note.store';
import * as motion from 'motion/react-client';

export const NoteList = () => {
  const { notes } = useNoteStore();

  return (
    <motion.div
      className="flex-1 overflow-y-auto scroll"
      initial={{ opacity: 0, transform: 'translateY(-40px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 0.3 }}
    >
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {!notes.length && (
        <div>
          <p className="text-sm px-2 py-1 text-gray-400 text-center">Empty</p>
        </div>
      )}
    </motion.div>
  );
};
