import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/text';
import {
  type AsyncReducersMap,
  useAsyncReducers,
  useAppSelector,
  useInitialEffect,
  useAppDispatch,
} from 'shared/utils/hooks';
import {
  articleDetailsCommentsReducer,
  fetchCommentsByArticleId,
  selectArticleComments,
  selectArticleCommentsLoading,
} from '../model';
import cls from './article-details-page.module.scss';

const asyncReducers: AsyncReducersMap = {
  articleDetailsComments: {
    reducer: articleDetailsCommentsReducer,
    destroy: true,
  },
};

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectArticleComments.selectAll);
  const commentsLoading = useAppSelector(selectArticleCommentsLoading);

  useAsyncReducers(asyncReducers);

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return <div>{t('Article is not found')}</div>;
  }

  return (
    <div>
      <ArticleDetails id={id} />
      <Text className={cls.commentsTitle} title={t('Comments')} />
      <CommentList loading={commentsLoading} comments={comments} />
    </div>
  );
});

export default ArticleDetailsPage;
