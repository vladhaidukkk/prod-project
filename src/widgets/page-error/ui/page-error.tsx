import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';
import cls from './page-error.module.scss';

type PageErrorProps = {
  className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(cls.pageError, {}, [className])}>
      <h1>{t('Something went wrong')}</h1>
      <Button onClick={handleReload}>{t('Reload page')}</Button>
    </div>
  );
};
