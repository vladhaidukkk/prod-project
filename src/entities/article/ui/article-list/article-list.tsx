import { clsx } from 'shared/utils/clsx';
import { memo } from 'react';
import { ArticleListItem } from '../article-list-item/article-list-item';
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton';
import cls from './article-list.module.scss';
import { type Article, type ArticleView } from '../../types';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  loading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === 'list' ? 9 : 3)
    .fill(0)
    .map((_item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(
  ({ className, articles, view = 'list', loading }: ArticleListProps) => {
    if (loading) {
      return (
        <div className={clsx(cls.articleList, {}, [className, cls[view]])}>
          {getSkeletons(view)}
        </div>
      );
    }

    const renderArticle = (article: Article) => (
      <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
    );

    return (
      <div className={clsx(cls.articleList, {}, [className, cls[view]])}>
        {articles.length > 0 ? articles.map(renderArticle) : null}
      </div>
    );
  }
);
