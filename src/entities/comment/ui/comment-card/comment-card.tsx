import { memo } from 'react';
import { Avatar } from 'shared/ui/avatar';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import { type Comment } from '../../types';
import cls from './comment-card.module.scss';

type CommentCardProps = {
  className?: string;
  comment: Comment;
};

export const CommentCard = memo(({ className, comment }: CommentCardProps) => {
  return (
    <div className={clsx(cls.commentCard, {}, [className])}>
      <div className={cls.userInfo}>
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
        <Text description={comment.user.username} />
      </div>
      <Text description={comment.text} />
    </div>
  );
});
