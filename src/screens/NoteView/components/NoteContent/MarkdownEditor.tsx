import { Editor } from '@/components/Editor';
import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { useCallback, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const MarkdownEditor = () => {
  const { control } = useFormContext<INoteForm>();
  const { changeField, handleSaveNote } = useNoteContext();

  const handleSave = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();

        handleSaveNote();
      }
    },
    [handleSaveNote],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleSave);
    return () => {
      window.removeEventListener('keydown', handleSave);
    };
  }, [handleSave]);

  return (
    <Controller
      control={control}
      name="content"
      render={({ field: { onChange, ...field } }) => (
        <Editor
          {...field}
          onChange={changeField('content', onChange)}
          placeholder="Description..."
          className="flex-1 scroll"
        />
      )}
    />
  );
};
