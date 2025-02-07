import { INote } from '@/api/models/note';

export interface INoteForm extends INote {
  isSaving: boolean;
}
