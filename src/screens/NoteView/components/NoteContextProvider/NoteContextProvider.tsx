import { useDebounce } from '@/hooks/useDebounce';
import { NoteContext } from '@/screens/NoteView/data/noteContext';
import { useUpdateNote } from '@/screens/NoteView/hooks/useUpdateNote';
import { useNoteStore } from '@/stores/note.store';
import { PropsWithChildren, useCallback } from 'react';

export const NoteContextProvider = ({ children }: PropsWithChildren) => {
  const { activeNote } = useNoteStore();
  const { mutate, isPending } = useUpdateNote();

  const updateNote = useCallback(
    <T extends string | number>(name: string, value: T) => {
      mutate({ id: activeNote?.id, data: { [name]: value } });
    },
    [activeNote?.id, mutate],
  );
  const debouncedUpdateNote = useDebounce(updateNote, 300);

  const changeField: <T extends string | number>(name: string, onChange?: (value: T) => void) => (value: T) => void =
    useCallback(
      (name, onChange) => (value) => {
        onChange?.(value);
        debouncedUpdateNote(name, value);
      },
      [debouncedUpdateNote],
    );

  return <NoteContext.Provider value={{ changeField, isSaving: isPending }}>{children}</NoteContext.Provider>;
};
