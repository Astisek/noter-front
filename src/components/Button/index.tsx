import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import s from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
  variant?: 'primary' | 'outline'
}

export const Button = ({
  className,
  children,
  size = 'medium',
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...props}
      className={`${s.button} ${s[size]} ${s[variant]} ${className}`}
    >{children}</button>
  );
};
