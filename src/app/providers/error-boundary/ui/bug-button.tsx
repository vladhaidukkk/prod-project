import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';

// BugButton component exists only to test the ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error('BugButton threw an error');
    }
  }, [error]);

  const handleThrow = () => {
    setError(true);
  };

  return <Button onClick={handleThrow}>{t('Throw an error')}</Button>;
};
