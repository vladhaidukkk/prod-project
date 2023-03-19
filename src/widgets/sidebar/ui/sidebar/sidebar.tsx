import { LangSwitcher } from 'features/lang-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import { memo, useState } from 'react';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';
import { useAppSelector } from 'shared/utils/hooks';
import { selectSidebarItems } from 'widgets/sidebar/model';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import cls from './sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarItems = useAppSelector(selectSidebarItems);
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
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
});
