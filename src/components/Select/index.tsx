import { IOption } from '@/models/select';
import { InputHTMLAttributes } from 'react';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
  placeholder?: string;
}

export const Select = ({
  name,
  className,
  options,
  placeholder,
  value,
  ...props
}: SelectProps) => {
  return (
    <select
      name={name}
      className={`input border-gray-400 border ${className}`}
      {...props}
    >
      {!!placeholder && (
        <option
          value={value}
          disabled
        >
          {placeholder}
        </option>
      )}
      {options.map((option) => {
        return (
          <option
            value={value}
            key={option.value}
          >
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
