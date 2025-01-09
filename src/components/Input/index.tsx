import { InputHTMLAttributes } from 'react';

export const Input = ({
  name,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      name={name}
      className={`input ${className}`}
    />
  );
};
