import { ArticleDetails } from 'entities/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('Article is not found')}</div>;
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
});

export default ArticleDetailsPage;
