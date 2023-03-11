import { useEffect, useRef, useState, type MouseEvent, type ReactNode, useCallback } from 'react';
import { Portal } from 'shared/ui/portal';
import { clsx } from 'shared/utils/clsx';
import cls from './modal.module.scss';

const CLOSING_DURATION = 300;

type ModalProps = {
  className?: string;
  open: boolean;
  onClose?: () => void;
  lazy?: boolean;
  children: ReactNode;
};

// memo is useless here, because we have children and they change very often + it is bad to store so much data
export const Modal = ({ className, open, onClose, lazy, children }: ModalProps) => {
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, CLOSING_DURATION);
    }
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
      setMounted(true);
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

  if (lazy && !mounted) {
    return null;
  }

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
