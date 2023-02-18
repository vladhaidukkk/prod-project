import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';
import { PageWrapper } from './ui/page-wrapper';
import { routes } from './config';

export const Routing = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<PageWrapper>{element}</PageWrapper>} />
        ))}
      </Routes>
    </Suspense>
  );
};
