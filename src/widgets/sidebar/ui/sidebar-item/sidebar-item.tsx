import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteLink, RouteLinkVariants } from 'shared/ui/route-link';
import { clsx } from 'shared/utils/clsx';
import { type SidebarItemType } from '../../types';
import cls from './sidebar-item.module.scss';

type SidebarItemProps = {
  item: SidebarItemType;
  collapsed: boolean;
};

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <RouteLink
      to={item.path}
      variant={RouteLinkVariants.Inverted}
      className={clsx(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.text}>{t(item.text)}</span>
    </RouteLink>
  );
});
