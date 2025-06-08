import { IRegisterForm } from '@/screens/RegisterFinal/models/register.model';
import * as yup from 'yup';

export const registerSchema = yup.object<IRegisterForm>({
  email: yup.string().required('Email is required').email('Invalid email format'),
  login: yup
    .string()
    .required('Login is required')
    .min(6, 'Login must be at least 6 characters long')
    .max(24, 'Login must be no more than 24 characters long'),
  password: yup
    .string()
    .required('Password cannot be empty')
    .min(8, 'Password must be at least 8 characters long')
    .max(24, 'Password must be no more than 24 characters long'),
  repeatPassword: yup
    .string()
    .required('Password confirmation is required')
    .test('password-match', 'Passwords do not match', (value, { parent }) => parent.password === value),
});
