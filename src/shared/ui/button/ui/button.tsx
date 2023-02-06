import { ButtonHTMLAttributes, FC } from 'react';
import { clsx } from 'shared/utils/clsx';
import { ButtonVariants } from '../consts';
import cls from './button.module.scss';

type ButtonProps = {
  className?: string;
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, variant, children, ...restProps }) => {
  const variantClass = variant && cls[variant];

  return (
    <button className={clsx(cls.button, {}, [className, variantClass])} {...restProps}>
      {children}
    </button>
  );
};
