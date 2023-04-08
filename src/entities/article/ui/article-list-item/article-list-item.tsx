import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'shared/utils/clsx';
import { Text } from 'shared/ui/text';
import { Icon } from 'shared/ui/icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/card';
import { Avatar } from 'shared/ui/avatar';
import { Button } from 'shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import cls from './article-list-item.module.scss';
import {
  type Article,
  ArticleBlockType,
  type ArticleTextBlock,
  type ArticleView,
} from '../../types';
import { ArticleTextBlockComponent } from '../article-text-block/article-text-block';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePaths[RouteNames.ArticleDetails] + article.id);
  }, [article.id, navigate]);

  const types = <Text description={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text description={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === 'tile') {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.Text
    ) as ArticleTextBlock;

    return (
      <div className={clsx(cls.articleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text description={article.user.username} className={cls.username} />
            <Text description={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} variant="outlined">
              {t('Read more...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx(cls.articleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img alt={article.title} src={article.img} className={cls.img} />
          <Text description={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text description={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
