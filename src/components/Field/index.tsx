import { Input } from '@/components/Input';
import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Field = ({ label, name, error, className, ...props }: FieldProps) => {
  const isError = !!error;

  return (
    <div className="flex flex-col items-stretch gap-2">
      <label htmlFor={name} className="text-text text-xl">
        {label}
      </label>
      <Input
        name={name}
        className={classnames(className, { ['ring-red-500']: isError, ['ring-2']: isError })}
        {...props}
      />
      {isError && <p className="text-red-500">{error}</p>}
    </div>
  );
};
