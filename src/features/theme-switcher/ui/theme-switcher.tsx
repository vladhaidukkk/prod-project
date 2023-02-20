import { Themes, useTheme } from 'shared/config/theme';
import { clsx } from 'shared/utils/clsx';
import { Button } from 'shared/ui/button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={clsx('', {}, [className])} variant="text" compact onClick={toggleTheme}>
      {theme === Themes.Light ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
