import { InputHTMLAttributes, useCallback } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string) => void;
}

export const Input = ({ className, onChange, ...props }: InputProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e?.target?.value);
    },
    [onChange],
  );

  return <input {...props} className={`input ${className}`} onChange={handleChange} />;
};
