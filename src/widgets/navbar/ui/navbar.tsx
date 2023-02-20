import { clsx } from 'shared/utils/clsx';
import cls from './navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={clsx(cls.navbar, {}, [className])} />
  );
};
