import { useDebounce } from '@/hooks/useDebounce';
import { NoteContext } from '@/screens/NoteView/data/noteContext';
import { useUpdateNote } from '@/screens/NoteView/hooks/useUpdateNote';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { useNoteStore } from '@/stores/note.store';
import { PropsWithChildren, useCallback, useReducer } from 'react';
import { useFormContext } from 'react-hook-form';

export const NoteContextProvider = ({ children }: PropsWithChildren) => {
  const [isEdit, toggleIsEdit] = useReducer((state) => !state, false);

  const { getValues } = useFormContext<INoteForm>();

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

  const handleSaveNote = useCallback(() => {
    const content = getValues('content');
    toggleIsEdit();
    changeField('content')(content);
  }, [changeField, getValues]);

  return (
    <NoteContext.Provider value={{ changeField, isSaving: isPending, isEdit, toggleIsEdit, handleSaveNote }}>
      {children}
    </NoteContext.Provider>
  );
};
