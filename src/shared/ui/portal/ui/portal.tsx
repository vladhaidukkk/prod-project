import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  element?: HTMLElement;
  children: ReactNode;
};

export const Portal = ({ element = document.body, children }: PortalProps) => {
  return createPortal(children, element);
};
