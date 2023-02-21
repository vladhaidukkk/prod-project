import { useEffect, useRef, useState, type MouseEvent, type ReactNode, useCallback } from 'react';
import { Portal } from 'shared/ui/portal';
import { clsx } from 'shared/utils/clsx';
import cls from './modal.module.scss';

const CLOSING_DURATION = 300;

type ModalProps = {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ className, open, onClose, children }: ModalProps) => {
  const [closing, setClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    setClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setClosing(false);
    }, CLOSING_DURATION);
  }, [onClose]);

  const keyDownHandler = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [open, keyDownHandler]);

  const contentClickHandler = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <div className={clsx(cls.modal, { [cls.opened]: open, [cls.closing]: closing }, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
