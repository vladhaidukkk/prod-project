import { clsx } from 'shared/utils/clsx';
import { type SVGProps, type VFC, memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TileIcon from 'shared/assets/icons/tile.svg';
import { Icon } from 'shared/ui/icon';
import { Button } from 'shared/ui/button';
import cls from './article-view-selector.module.scss';
import { type ArticleView } from '../../types';

type ViewType = {
  view: ArticleView;
  icon: VFC<SVGProps<SVGSVGElement>>;
};

const viewTypes: ViewType[] = [
  {
    view: 'tile',
    icon: TileIcon,
  },
  {
    view: 'list',
    icon: ListIcon,
  },
];

type ArticleViewSelectorProps = {
  className?: string;
  view: ArticleView;
  onChangeView?: (view: ArticleView) => void;
};

export const ArticleViewSelector = memo(
  ({ className, view, onChangeView }: ArticleViewSelectorProps) => {
    const clickHandlerBuilder = (newView: ArticleView) => () => {
      onChangeView?.(newView);
    };

    return (
      <div className={clsx('', {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            variant="text"
            onClick={clickHandlerBuilder(viewType.view)}
            className={cls.button}
          >
            <Icon
              Svg={viewType.icon}
              className={clsx('', { [cls.notSelected]: viewType.view !== view })}
            />
          </Button>
        ))}
      </div>
    );
  }
);
