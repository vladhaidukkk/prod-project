import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/auth-by-username';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';
import cls from './navbar.module.scss';
import { useSelector } from 'react-redux';
import { authActions, selectAuthViewer } from 'entities/auth';
import { useAppDispatch } from 'shared/utils/hooks';

type NavbarProps = {
  className?: string;
};

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const viewer = useSelector(selectAuthViewer);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const showLoginModalHandler = useCallback(() => {
    setLoginModalOpen(true);
  }, []);

  const closeLoginModalHandler = useCallback(() => {
    setLoginModalOpen(false);
  }, []);

  const logoutHandler = useCallback(() => {
    dispatch(authActions.loggedOut());
  }, [dispatch]);

  if (viewer) {
    return (
      <nav className={clsx(cls.navbar, {}, [className])}>
        <Button variant="text" inverted onClick={logoutHandler}>
          {t('Log out')}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={clsx(cls.navbar, {}, [className])}>
      <Button variant="text" inverted onClick={showLoginModalHandler}>
        {t('Log in')}
      </Button>
      {loginModalOpen && <LoginModal open={loginModalOpen} onClose={closeLoginModalHandler} />}
    </nav>
  );
});
