import { ArticleList } from 'entities/article';
import { memo } from 'react';

const ArticlesPage = memo(() => {
  return (
    <div>
      <ArticleList view="list" articles={[]} loading />
    </div>
  );
});

export default ArticlesPage;
