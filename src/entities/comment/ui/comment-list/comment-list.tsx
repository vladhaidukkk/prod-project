import { clsx } from 'shared/utils/clsx';
import { Text } from 'shared/ui/text';
import { type Comment } from '../../types';
import { CommentCard } from '../comment-card/comment-card';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './comment-list.module.scss';
import { CommentCardSkeleton } from '../comment-card/comment-card-skeleton';

type CommentListProps = {
  className?: string;
  comments: Comment[];
  loading?: boolean;
};

export const CommentList = memo(({ className, comments, loading }: CommentListProps) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className={clsx(cls.commentList, {}, [className])}>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
      </div>
    );
  }

  return (
    <div className={clsx(cls.commentList, {}, [className])}>
      {comments.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)
      ) : (
        <Text description={t('No comments')} />
      )}
    </div>
  );
});
