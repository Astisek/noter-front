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
      onChange(options[e.target.selectedIndex].value as T);
    },
    [onChange, options],
  );
  return (
    <select name={name} className={`input border-gray-400 border ${className}`} onChange={handleChange} {...props}>
      {!!placeholder && (
        <option value={value} disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option value={value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
