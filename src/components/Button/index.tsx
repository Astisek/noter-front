import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...props}
      className={`bg-primary hover:bg-hover text-text px-4 py-3 rounded transition-colors text-lg ${className}`}
    ></button>
  );
};
