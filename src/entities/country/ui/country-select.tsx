import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { type Country } from 'shared/consts/country';
import { Select } from 'shared/ui/select';
import { countrySelectOptions } from '../consts';

type CountrySelectProps = {
  className?: string;
  value?: Country;
  onChange?: (country: Country) => void;
  readonly?: boolean;
};

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const changeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        className={className}
        label={t('Country')}
        options={countrySelectOptions}
        value={value}
        onChange={changeHandler}
        readonly={readonly}
      />
    );
  }
);
