import { IOption } from '@/models/select.model';
import { INoteForm } from '@/screens/NoteView/models/noteForm.model';

export const noteFormDefaultValues: INoteForm = {
  content: '',
  rate: null,
  title: '',
};

const rateValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const rateOptions: IOption[] = rateValues.map((value) => ({
  value: value.toString(),
  label: value.toString(),
}));
rateOptions.unshift({
  value: null,
  label: '?',
});
