import { ReactNode, Suspense } from 'react';
import 'shared/config/i18n';

export const withI18n = (component: () => ReactNode) => () => {
  return <Suspense fallback="">{component()}</Suspense>;
};
