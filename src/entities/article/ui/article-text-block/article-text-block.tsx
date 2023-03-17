import { type ArticleTextBlock } from '../../types';
import { memo } from 'react';
import { Text } from 'shared/ui/text';
import cls from './article-text-block.module.scss';

type ArticleTextBlockComponentProps = {
  className?: string;
  block: ArticleTextBlock;
};

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div className={className}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} description={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);
