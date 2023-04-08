import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/article';
import { memo, useCallback } from 'react';
import {
  type AsyncReducersMap,
  useAsyncReducers,
  useInitialEffect,
  useAppDispatch,
  useAppSelector,
} from 'shared/utils/hooks';
import {
  articlesPageActions,
  articlesPageReducer,
  fetchArticleList,
  selectArticles,
  selectArticlesPageLoading,
  selectArticlesPageView,
} from '../model';

const asyncReducers: AsyncReducersMap = {
  articlesPage: {
    reducer: articlesPageReducer,
    destroy: true,
  },
};

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles.selectAll);
  const loading = useAppSelector(selectArticlesPageLoading);
  const view = useAppSelector(selectArticlesPageView);

  useAsyncReducers(asyncReducers);

  useInitialEffect(() => {
    void dispatch(fetchArticleList());
    dispatch(articlesPageActions.initialized());
  });

  const changeViewHandler = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.viewSet(view));
    },
    [dispatch]
  );

  return (
    <div>
      <ArticleViewSelector view={view} onChangeView={changeViewHandler} />
      <ArticleList view={view} articles={articles} loading={loading} />
    </div>
  );
});

export default ArticlesPage;
