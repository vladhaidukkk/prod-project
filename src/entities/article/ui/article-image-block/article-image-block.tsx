import { memo } from 'react';
import { Text } from 'shared/ui/text';
import { clsx } from 'shared/utils/clsx';
import { type ArticleImageBlock } from '../../types';
import cls from './article-image-block.module.scss';

type ArticleImageBlockComponentProps = {
  className?: string;
  block: ArticleImageBlock;
};

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div className={clsx(cls.imgWrapper, {}, [className])}>
        <img className={cls.img} src={block.src} alt={block.title} />
        {block.title && <Text description={block.title} align="center" />}
      </div>
    );
  }
);
