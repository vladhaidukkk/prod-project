import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/error-boundary';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <p>{t('Main Page')}</p>
      <BugButton />
    </div>
  );
};

export default MainPage;
