import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetails = memo(() => {
  const { t } = useTranslation('articles');

  return <div>{t('Article Details')}</div>;
});

export default ArticleDetails;
