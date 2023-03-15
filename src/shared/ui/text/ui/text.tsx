import { memo } from 'react';
import { clsx } from 'shared/utils/clsx';
import { type TextAlign, type TextColor } from '../types';
import cls from './text.module.scss';

type TextProps = {
  className?: string;
  title?: string;
  description?: string;
  color?: TextColor;
  align?: TextAlign;
};

export const Text = memo(
  ({ className, title, description, color = 'primary', align = 'left' }: TextProps) => {
    return (
      <div className={clsx(cls.text, {}, [className, cls[color], cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}
        {description && <p className={cls.description}>{description}</p>}
      </div>
    );
  }
);
