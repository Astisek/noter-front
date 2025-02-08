import { Select } from '@/components/Select';
import { rateOptions } from '@/screens/NoteView/data/noteForm';
import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';
import { Controller, useFormContext } from 'react-hook-form';

export const Rate = () => {
  const { control } = useFormContext<INoteForm>();
  const { changeField } = useNoteContext();

  const handleRateChange = (onChange: (value: string) => void) => (value: string) => {
    onChange(value);
    changeField('rate')(+value);
  };

  return (
    <div className="flex items-center">
      <Controller
        control={control}
        name="rate"
        render={({ field: { onChange, value, ...field } }) => (
          <Select
            {...field}
            value={value?.toString()}
            onChange={handleRateChange(onChange)}
            options={rateOptions}
            className="p-2"
          />
        )}
      />
      <p className="text-text text-2xl">/10</p>
    </div>
  );
};
