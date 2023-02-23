import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/error-boundary';
import { Counter } from 'entities/counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <p>{t('Main Page')}</p>
      <Counter />
      <BugButton />
    </div>
  );
};

export default MainPage;
