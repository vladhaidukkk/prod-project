import { useTranslation } from 'react-i18next';
import cls from './not-found.module.scss';

const NotFound = () => {
  const { t } = useTranslation('not-found');

  return <div className={cls.notFound}>{t('Not Found')}</div>;
};

export default NotFound;
