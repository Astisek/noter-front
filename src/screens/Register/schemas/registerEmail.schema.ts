import * as yup from 'yup';

export const registerEmailSchema = yup.object({
  email: yup.string().email('Invalid email'),
});
