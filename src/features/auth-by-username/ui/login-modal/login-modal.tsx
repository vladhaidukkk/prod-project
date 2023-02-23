import { Modal } from 'shared/ui/modal';
import { LoginForm } from '../login-form/login-form';

type LoginModalProps = {
  className?: string;
  open: boolean;
  onClose: () => void;
};

export const LoginModal = ({ className, open, onClose }: LoginModalProps) => {
  return (
    <Modal className={className} open={open} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
