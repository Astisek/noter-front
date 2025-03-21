import { PropsWithChildren, useState } from 'react';
import { registerContext } from '@/data/registerContext';

export const RegisterContextProvider = ({ children }: PropsWithChildren) => {
  const [registerContextValue, setRegisterContextValue] = useState<string>('');

  return (
    <registerContext.Provider value={{ email: registerContextValue, setEmail: setRegisterContextValue }}>
      {children}
    </registerContext.Provider>
  );
};
