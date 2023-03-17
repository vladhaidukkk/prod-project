import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './not-found-page.module.scss';

const NotFoundPage = memo(() => {
  const { t } = useTranslation('not-found');

  return <div className={cls.notFound}>{t('Not Found')}</div>;
});

export default NotFoundPage;
