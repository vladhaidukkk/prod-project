import { type ChangeEvent, memo, useMemo } from 'react';
import { clsx } from 'shared/utils/clsx';
import { type SelectOption } from '../types';
import cls from './select.module.scss';

type SelectProps = {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
};

export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option key={opt.value} className={cls.option} value={opt.value}>
          {opt.content}
        </option>
      ));
    }, [options]);

    return (
      <div className={clsx(cls.wrapper, {}, [className])}>
        {label && <span>{label}&gt;</span>}
        <select className={cls.select} value={value} onChange={changeHandler} disabled={readonly}>
          {optionsList}
        </select>
      </div>
    );
  }
);
