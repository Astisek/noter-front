import * as yup from 'yup';

export const noteFormSchema = yup.object({
  title: yup.string().required('Title required'),
  content: yup.string().optional(),
  rate: yup.number().optional(),
});
