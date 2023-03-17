import { Button } from 'shared/ui/button';
import { clsx } from 'shared/utils/clsx';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './code.module.scss';
import { useCallback } from 'react';

type CodeProps = {
  className?: string;
  children: string;
};

export const Code = ({ className, children }: CodeProps) => {
  const copyHandler = useCallback(() => {
    void navigator.clipboard.writeText(children);
  }, [children]);

  return (
    <pre className={clsx(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} variant="text" onClick={copyHandler}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{children}</code>
    </pre>
  );
};
