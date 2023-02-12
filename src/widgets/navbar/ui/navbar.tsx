import { useTranslation } from 'react-i18next';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import { RouteLink, RouteLinkVariants } from 'shared/ui/route-link';
import { clsx } from 'shared/utils/clsx';
import cls from './navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={clsx(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <RouteLink to={RoutePaths[RouteNames.Main]} variant={RouteLinkVariants.Inverted}>
          {t('Main')}
        </RouteLink>
        <RouteLink to={RoutePaths[RouteNames.About]} variant={RouteLinkVariants.Inverted}>
          {t('About')}
        </RouteLink>
      </div>
    </nav>
  );
};
