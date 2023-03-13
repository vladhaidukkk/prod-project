import { lazy, type FC } from 'react';
import { type LoginFormProps } from './login-form';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      // It's a pseudo delay only for demonstration purpose
      setTimeout(() => {
        resolve(import('./login-form'));
      }, 1500);
    })
);
