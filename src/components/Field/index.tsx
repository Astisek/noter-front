import { Input } from '@/components/Input';
import { InputHTMLAttributes } from 'react';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Field = ({ label, name, ...props }: FieldProps) => {
  return (
    <div className="flex flex-col items-stretch gap-2">
      <label htmlFor={name} className="text-text text-xl">
        {label}
      </label>
      <Input name={name} {...props} />
    </div>
  );
};
