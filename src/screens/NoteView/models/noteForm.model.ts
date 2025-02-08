import { noteFormSchema } from '@/screens/NoteView/schemas/noteForm.schema';
import { InferType } from 'yup';

export type INoteForm = InferType<typeof noteFormSchema>;

export interface INoteContext {
  changeField: <T extends string | number>(name: string, onChange?: (value: T) => void) => (value: T) => void;
  isSaving: boolean;
}
