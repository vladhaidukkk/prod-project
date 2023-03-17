import {
  articleDetailsReducer,
  fetchArticleById,
  selectArticleDetailsData,
  selectArticleDetailsError,
  selectArticleDetailsLoading,
} from '../../model';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'shared/utils/clsx';
import {
  type AsyncReducersMap,
  useAsyncReducers,
  useAppDispatch,
  useAppSelector,
} from 'shared/utils/hooks';
import { Text } from 'shared/ui/text';
import cls from './article-details.module.scss';
import { Skeleton } from 'shared/ui/skeleton';
import { Avatar } from 'shared/ui/avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/icon';
import { type ArticleBlock, ArticleBlockType } from '../../types';
import { ArticleCodeBlockComponent } from '../article-code-block/article-code-block';
import { ArticleImageBlockComponent } from '../article-image-block/article-image-block';
import { ArticleTextBlockComponent } from '../article-text-block/article-text-block';

const asyncReducers: AsyncReducersMap = {
  articleDetails: {
    reducer: articleDetailsReducer,
    destroy: true,
  },
};

type ArticleDetailsProps = {
  className?: string;
  id: string;
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectArticleDetailsData);
  const loading = useAppSelector(selectArticleDetailsLoading);
  const error = useAppSelector(selectArticleDetailsError);

  useAsyncReducers(asyncReducers);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.Text:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.Image:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.Code:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
      default:
        return null;
    }
  }, []);

  if (loading) {
    return (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={cls.title} width={600} height={30} />
        <Skeleton className={cls.skeleton} width={400} height={30} />
        <Skeleton className={cls.skeleton} width="100%" height={230} />
        <Skeleton className={cls.skeleton} width="100%" height={230} />
      </>
    );
  }

  if (error) {
    return <Text title={t('Failed to load article details')} color="error" align="center" />;
  }

  return data ? (
    <div className={clsx(cls.articleDetails, {}, [className])}>
      <Avatar className={cls.avatar} src={data?.img} size={200} />
      <Text className={cls.title} title={data.title} description={data.subtitle} size="lg" />
      <div className={cls.articleInfo}>
        <Icon Svg={EyeIcon} />
        <Text description={data.views.toString()} />
      </div>
      <div className={cls.articleInfo}>
        <Icon Svg={CalendarIcon} />
        <Text description={data.createdAt} />
      </div>
      {data.blocks.map(renderBlock)}
    </div>
  ) : null;
});
