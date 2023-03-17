import { memo } from 'react';
import { clsx } from 'shared/utils/clsx';
import { type TextSize, type TextAlign, type TextColor } from '../types';
import cls from './text.module.scss';

type TextProps = {
  className?: string;
  title?: string;
  description?: string;
  color?: TextColor;
  align?: TextAlign;
  size?: TextSize;
};

export const Text = memo(
  ({
    className,
    title,
    description,
    color = 'primary',
    align = 'left',
    size = 'base',
  }: TextProps) => {
    return (
      <div className={clsx(cls.text, {}, [className, cls[color], cls[align], cls[size]])}>
        {title && <p className={cls.title}>{title}</p>}
        {description && <p className={cls.description}>{description}</p>}
      </div>
    );
  }
);
