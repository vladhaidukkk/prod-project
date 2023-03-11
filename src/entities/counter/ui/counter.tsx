import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { useAppDispatch } from 'shared/utils/hooks';
import { counterActions, selectCounterValue } from '../model';

export const Counter = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const count = useSelector(selectCounterValue);

  const incrementHandler = () => {
    dispatch(counterActions.incremented());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <div style={{ display: 'flex', gap: 5, margin: '5px 0' }}>
        <Button data-testid="decrement-btn" onClick={decrementHandler}>
          {t('decrement')}
        </Button>
        <Button data-testid="increment-btn" onClick={incrementHandler}>
          {t('increment')}
        </Button>
      </div>
    </div>
  );
});
