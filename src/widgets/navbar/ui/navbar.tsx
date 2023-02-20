// TODO: remove this
/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { Modal } from 'shared/ui/modal';
import { clsx } from 'shared/utils/clsx';
import cls from './navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const toggleAuthModalHandler = useCallback(() => {
    setAuthModalOpen((value) => !value);
  }, []);

  return (
    <nav className={clsx(cls.navbar, {}, [className])}>
      <Button variant="text" inverted onClick={toggleAuthModalHandler}>
        {t('Log in')}
      </Button>
      <Modal open={authModalOpen} onClose={toggleAuthModalHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi, alias numquam animi
        vitae sapiente error accusantium velit ducimus, possimus voluptatem ipsam fugit ex dolore
        autem dicta eius quia modi!
      </Modal>
    </nav>
  );
};
