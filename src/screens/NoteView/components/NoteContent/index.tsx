import { Editor } from '@/components/Editor';
import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { Controller, useFormContext } from 'react-hook-form';

export const NoteContent = () => {
  const { control } = useFormContext<INoteForm>();
  const { changeField } = useNoteContext();

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
