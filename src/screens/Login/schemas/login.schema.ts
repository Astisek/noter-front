import { ILoginForm } from '@/screens/Login/models/login.model';
import * as yup from 'yup';

export const loginSchema = yup.object<ILoginForm>({
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
});
