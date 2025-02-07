import { Input } from '@/components/Input';
import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';

interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  error?: string;
  name: string;
}

export const Field = ({ label, name, error, className, ...props }: FieldProps) => {
  const { control } = useFormContext();
  const isError = !!error;

  return (
    <div className="flex flex-col items-stretch gap-2">
      <label htmlFor={name} className="text-text text-xl">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            name={name}
            className={classnames(className, { ['ring-red-500']: isError, ['ring-2']: isError })}
            {...field}
            {...props}
          />
        )}
      />

      {isError && <p className="text-red-500">{error}</p>}
    </div>
  );
};
