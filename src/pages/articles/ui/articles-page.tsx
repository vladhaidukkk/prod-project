import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = memo(() => {
  const { t } = useTranslation('articles');

  return <div>{t('Articles List')}</div>;
});

export default ArticlesPage;
