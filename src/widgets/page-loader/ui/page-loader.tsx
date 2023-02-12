import { Loader } from 'shared/ui/loader';
import { clsx } from 'shared/utils/clsx';
import cls from './page-loader.module.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={clsx(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
