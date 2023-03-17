import { type SVGProps, type VFC } from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './icon.module.scss';

type IconProps = {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
};

export const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={clsx(cls.icon, {}, [className])} />;
};
