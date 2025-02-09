import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { NoteNotifyText } from './NoteNotifyText';
import { useNoteStore } from '@/stores/note.store';
import { useFormContext } from 'react-hook-form';
import * as motion from 'motion/react-client';
import { Variants } from 'motion/react';

export const NoteNotify = () => {
  const { isSaving } = useNoteContext();
  const { activeNote } = useNoteStore();
  const {
    formState: { isDirty },
  } = useFormContext<INoteForm>();

  const variants: Variants = {
    disable: { opacity: 1 },
    active: { opacity: 0 },
  };

  return (
    <motion.p
      className="text-gray-400"
      transition={{ delay: 2, duration: 0.3 }}
      variants={variants}
      animate={!isSaving && isDirty ? 'active' : 'disable'}
      key={isSaving.toString()}
    >
      <NoteNotifyText isDirty={isDirty} isSaving={isSaving} lastUpdate={activeNote?.updated_at} />
    </motion.p>
  );
};
