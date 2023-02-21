import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  container?: HTMLElement;
  children: ReactNode;
};

export const Portal = ({ container = document.body, children }: PortalProps) => {
  return createPortal(children, container);
};
