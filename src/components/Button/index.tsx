import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import s from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
}

export const Button = ({
  className,
  children,
  size = 'medium',
  variant = 'primary',
  isLoading,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button {...props} className={`${s.button} ${s[size]} ${s[variant]} ${className}`} disabled={isLoading || disabled}>
      {children}
    </button>
  );
};
