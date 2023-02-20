import { type ButtonHTMLAttributes, type FC } from 'react';
import { clsx } from 'shared/utils/clsx';
import { type ButtonColor, type ButtonSize, type ButtonVariant } from '../types';
import cls from './button.module.scss';

type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  square?: boolean;
  compact?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'filled',
  color = 'primary',
  size = 'base',
  square = false,
  compact = false,
  children,
  ...restProps
}) => {
  return (
    <button
      className={clsx(cls.button, { [cls.square]: square, [cls.compact]: compact }, [
        className,
        cls[variant],
        cls[color],
        cls[size],
      ])}
      {...restProps}
    >
      {children}
    </button>
  );
};
