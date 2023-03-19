import { memo } from 'react';
import { Avatar } from 'shared/ui/avatar';
import { Skeleton } from 'shared/ui/skeleton';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import { type Comment } from '../../types';
import cls from './comment-card.module.scss';

type CommentCardProps = {
  className?: string;
  comment?: Comment;
  loading?: boolean;
};

export const CommentCard = memo(({ className, comment, loading }: CommentCardProps) => {
  if (loading) {
    return (
      <div className={clsx(cls.commentCard, {}, [className])}>
        <div className={cls.userInfo}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }

  return comment ? (
    <div className={clsx(cls.commentCard, {}, [className])}>
      <div className={cls.userInfo}>
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
        <Text description={comment.user.username} />
      </div>
      <Text description={comment.text} />
    </div>
  ) : null;
});
