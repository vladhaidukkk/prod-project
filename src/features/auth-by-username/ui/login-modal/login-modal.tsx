import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader';
import { Modal } from 'shared/ui/modal';
import { LoginFormAsync } from '../login-form/login-form.async';

type LoginModalProps = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export const LoginModal = ({ className, open, onClose }: LoginModalProps) => {
  return (
    <Modal className={className} open={open} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
