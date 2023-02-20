import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';

type LangSwitcherProps = {
  className?: string;
  short?: boolean;
};

export const LangSwitcher = ({ className, short = false }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button className={clsx('', {}, [className])} variant="text" compact onClick={handleToggle}>
      {short ? t('Language Short') : t('Language')}
    </Button>
  );
};
