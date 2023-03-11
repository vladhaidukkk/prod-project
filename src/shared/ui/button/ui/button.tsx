import { memo, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'shared/utils/clsx';
import { type ButtonColor, type ButtonSize, type ButtonVariant } from '../types';
import cls from './button.module.scss';

type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  inverted?: boolean;
  square?: boolean;
  compact?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(
  ({
    className,
    variant = 'filled',
    color = 'primary',
    size = 'base',
    inverted = false,
    square = false,
    compact = false,
    children,
    ...restProps
  }: ButtonProps) => {
    return (
      <button
        className={clsx(
          cls.button,
          { [cls.inverted]: inverted, [cls.square]: square, [cls.compact]: compact },
          [className, cls[variant], cls[color], cls[size]]
        )}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
