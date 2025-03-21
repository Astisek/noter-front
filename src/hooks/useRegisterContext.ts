import { registerContext } from '@/data/registerContext';
import { useContext } from 'react';

export const useRegisterContext = () => useContext(registerContext);
