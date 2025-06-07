import { Input } from '@/components/Input';
import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { Controller, useFormContext } from 'react-hook-form';

export const Title = () => {
  const { control } = useFormContext<INoteForm>();
  const { changeField } = useNoteContext();

  return (
    <Controller
      control={control}
      name="title"
      render={({ field: { onChange, ...field } }) => (
        <Input
          {...field}
          onChange={changeField('title', onChange)}
          placeholder="Title..."
          className="text-3xl bg-background-100 ring-transparent flex-1 w-0"
        />
      )}
    />
  );
};
