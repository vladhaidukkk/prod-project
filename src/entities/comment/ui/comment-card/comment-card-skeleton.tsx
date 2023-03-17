import { memo } from 'react';
import { Skeleton } from 'shared/ui/skeleton';
import { clsx } from 'shared/utils/clsx';
import cls from './comment-card.module.scss';

type CommentCardSkeletonProps = {
  className?: string;
};

export const CommentCardSkeleton = memo(({ className }: CommentCardSkeletonProps) => {
  return (
    <div className={clsx(cls.commentCard, {}, [className])}>
      <div className={cls.userInfo}>
        <Skeleton width={30} height={30} borderRadius="50%" />
        <Skeleton width={100} height={16} />
      </div>
      <Skeleton width="100%" height={50} />
    </div>
  );
});
