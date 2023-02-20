import { LangSwitcher } from 'features/lang-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import { Button } from 'shared/ui/button';
import { RouteLink, RouteLinkVariants } from 'shared/ui/route-link';
import { clsx } from 'shared/utils/clsx';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((value) => !value);
  };

  return (
    <aside
      data-testid="sidebar"
      className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-collapse-btn"
        className={cls.collapseBtn}
        color="background"
        size="lg"
        inverted
        square
        onClick={handleToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <RouteLink
          to={RoutePaths[RouteNames.Main]}
          variant={RouteLinkVariants.Inverted}
          className={cls.item}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.text}>{t('Main')}</span>
        </RouteLink>
        <RouteLink
          to={RoutePaths[RouteNames.About]}
          variant={RouteLinkVariants.Inverted}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.text}>{t('About')}</span>
        </RouteLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
};
