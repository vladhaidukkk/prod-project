import { type HTMLAttributes, memo, type ReactNode } from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './card.module.scss';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
};

export const Card = memo(({ className, children, ...restProps }: CardProps) => {
  return (
    <div className={clsx(cls.card, {}, [className])} {...restProps}>
      {children}
    </div>
  );
});
