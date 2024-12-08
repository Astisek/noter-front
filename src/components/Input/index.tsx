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
      className={`bg-background-50 p-3 outline-none focus:ring ring-gray-400 transition-shadow rounded text-text text-lg ${className}`}
    />
  );
};
