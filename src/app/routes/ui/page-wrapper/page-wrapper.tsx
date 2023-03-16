import { type FC } from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './page-wrapper.module.scss';

type PageWrapperProps = {
  className?: string;
};

export const PageWrapper: FC<PageWrapperProps> = ({ className, children }) => {
  return <div className={clsx(cls.pageWrapper, {}, [className])}>{children}</div>;
};
