import { memo } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { clsx } from 'shared/utils/clsx';
import { RouteLinkVariants } from '../consts';
import cls from './route-link.module.scss';

type RouteLinkProps = {
  className?: string;
  variant?: RouteLinkVariants;
} & LinkProps;

export const RouteLink = memo(
  ({ className, variant = RouteLinkVariants.Primary, children, ...restProps }: RouteLinkProps) => {
    return (
      <Link className={clsx('', {}, [className, cls[variant]])} {...restProps}>
        {children}
      </Link>
    );
  }
);
