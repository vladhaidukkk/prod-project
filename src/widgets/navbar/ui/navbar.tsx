import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/auth-by-username';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';
import cls from './navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const showLoginModalHandler = useCallback(() => {
    setLoginModalOpen(true);
  }, []);

  const closeLoginModalHandler = useCallback(() => {
    setLoginModalOpen(false);
  }, []);

  return (
    <nav className={clsx(cls.navbar, {}, [className])}>
      <Button variant="text" inverted onClick={showLoginModalHandler}>
        {t('Log in')}
      </Button>
      <LoginModal open={loginModalOpen} onClose={closeLoginModalHandler} />
    </nav>
  );
};
