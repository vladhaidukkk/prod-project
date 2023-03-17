import { memo } from 'react';
import { Code } from 'shared/ui/code';
import { type ArticleCodeBlock } from '../../types';

type ArticleCodeBlockComponentProps = {
  className?: string;
  block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={className}>
        <Code>{block.code}</Code>
      </div>
    );
  }
);
