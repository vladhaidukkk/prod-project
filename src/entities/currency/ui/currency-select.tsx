import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { type Currency } from 'shared/consts/currency';
import { Select } from 'shared/ui/select';
import { currencySelectOptions } from '../consts';

type CurrencySelectProps = {
  className?: string;
  value?: Currency;
  onChange?: (currency: Currency) => void;
  readonly?: boolean;
};

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const changeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <Select
        className={className}
        label={t('Currency')}
        options={currencySelectOptions}
        value={value}
        onChange={changeHandler}
        readonly={readonly}
      />
    );
  }
);
