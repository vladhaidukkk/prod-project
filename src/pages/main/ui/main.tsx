import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/error-boundary';
import { memo } from 'react';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <div>
      <p>{t('Main Page')}</p>
      <BugButton />
    </div>
  );
});

export default MainPage;
