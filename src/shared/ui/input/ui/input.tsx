import {
  memo,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type SyntheticEvent,
  type InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { clsx } from 'shared/utils/clsx';
import cls from './input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'value' | 'onChange'
>;

type InputProps = {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
} & HTMLInputProps;

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    onFocus,
    onBlur,
    onSelect,
    ...restProps
  }: InputProps) => {
    const [focused, setFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const caretVisible = focused && !readOnly;

    useEffect(() => {
      if (autoFocus) {
        setFocused(true);
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      setCaretPosition(event.target.value.length);
    };

    const focusHandler = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    };

    const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const selectHandler = (event: SyntheticEvent<HTMLInputElement, Event>) => {
      if (event.target instanceof HTMLInputElement) {
        setCaretPosition(event.target.selectionStart ?? 0);
      }
      onSelect?.(event);
    };

    return (
      <div className={clsx(cls.inputWrapper, {}, [className])}>
        {placeholder && <div>{placeholder}&gt;</div>}
        <div className={cls.caretWrapper}>
          <input
            ref={inputRef}
            className={cls.input}
            type={type}
            value={value}
            readOnly={readOnly}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            onSelect={selectHandler}
            {...restProps}
          />
          {caretVisible && (
            <span
              className={cls.caret}
              style={{
                left: caretPosition * 9.6,
              }}
            />
          )}
        </div>
      </div>
    );
  }
);
