import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button
      variant={ButtonVariants.Clear}
      className={clsx('', {}, [className])}
      onClick={handleToggle}
    >
      {t('Language')}
    </Button>
  );
};
