import { LangSwitcher } from 'features/lang-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';
import cls from './sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation('');
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((value) => !value);
  };

  return (
    <aside className={clsx(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={handleToggle}>{t('toggle')}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
