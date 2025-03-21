import { IOption } from '@/models/select.model';
import { InputHTMLAttributes, useCallback } from 'react';

interface SelectProps<T extends string> extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  options: IOption[];
  placeholder?: string;
  onChange?: (value: T) => void;
  value?: T;
}

export const Select = <T extends string>({
  name,
  className,
  options,
  placeholder,
  value,
  onChange,
  ...props
}: SelectProps<T>) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const index = placeholder ? e.target.selectedIndex - 1 : e.target.selectedIndex;
      onChange(options[index].value as T);
    },
    [onChange, options, placeholder],
  );

  return (
    <select
      name={name}
      className={`input border-gray-400 border ${className}`}
      onChange={handleChange}
      value={value}
      {...props}
    >
      {!!placeholder && (
        <option value={null} disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
