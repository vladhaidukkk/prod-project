import { memo } from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './loader.module.scss';

type LoaderProps = {
  className?: string;
};

export const Loader = memo(({ className }: LoaderProps) => {
  return (
    <div className={clsx(cls.loader, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
