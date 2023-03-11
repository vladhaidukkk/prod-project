import { lazy } from 'react';

// Because of memo and lazy we lose typing for props, so we can fix it with lazy<FC<Props>>(...)
export const LoginFormAsync = lazy(
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
