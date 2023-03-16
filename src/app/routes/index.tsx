import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';
import { PageWrapper } from './ui/page-wrapper/page-wrapper';
import { routes } from './config';
import { RequireAuth } from './ui/require-auth/require-auth';

export const Routing = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element, authRequired }) => {
          const routeElement = <PageWrapper>{element}</PageWrapper>;

          return (
            <Route
              key={path}
              path={path}
              element={authRequired ? <RequireAuth>{routeElement}</RequireAuth> : routeElement}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};
