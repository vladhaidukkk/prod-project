import { clsx } from 'shared/utils/clsx';
import { type TextColor } from '../types';
import cls from './text.module.scss';

type TextProps = {
  className?: string;
  title?: string;
  text?: string;
  color?: TextColor;
};

export const Text = ({ className, title, text, color = 'primary' }: TextProps) => {
  return (
    <div className={clsx('', {}, [className, cls[color]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
