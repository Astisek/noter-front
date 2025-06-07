'use client';
import { INote } from '@/api/models/note';
import { NoteContent } from '@/screens/NoteView/components/NoteContent';
import { NoteContextProvider } from '@/screens/NoteView/components/NoteContextProvider/NoteContextProvider';
import { NoteHeader } from '@/screens/NoteView/components/NoteHeader';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { noteFormSchema } from '@/screens/NoteView/schemas/noteForm.schema';
import { useNoteStore } from '@/stores/note.store';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as motion from 'motion/react-client';

export interface NotePageProps {
  note: INote;
}

export const NotePage = ({ note }: NotePageProps) => {
  const { setActiveNote } = useNoteStore();

  const methods = useForm<INoteForm>({
    mode: 'onChange',
    resolver: yupResolver(noteFormSchema),
    defaultValues: note,
  });

  useEffect(() => {
    setActiveNote(note);
  }, [note, setActiveNote]);

  return (
    <FormProvider {...methods}>
      <NoteContextProvider>
        <motion.div
          className="flex-1 py-10 overflow-y-auto h-screen px-3 lg:px-0"
          key={note.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-0 lg:px-32 w-full h-full flex flex-col">
            <NoteHeader />

            <NoteContent />
          </div>
        </motion.div>
      </NoteContextProvider>
    </FormProvider>
  );
};
