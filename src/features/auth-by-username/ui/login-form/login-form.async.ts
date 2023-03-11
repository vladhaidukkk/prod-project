import { lazy, type FC } from 'react';
import { type LoginFormProps } from './login-form';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      // It's a pseudo delay only for demonstration purpose
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
        // @ts-ignore
        resolve(import('./login-form'));
      }, 1500);
    })
);
