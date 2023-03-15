import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';
import { PageWrapper } from './ui/page-wrapper';
import { routes } from './config';
import { useAppSelector } from 'shared/utils/hooks';
import { selectAuthViewer } from 'entities/auth';

export const Routing = () => {
  const viewer = useAppSelector(selectAuthViewer);

  const availableRoutes = useMemo(() => {
    return routes.filter((route) => (route.authOnly ? Boolean(viewer) : true));
  }, [viewer]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {availableRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={<PageWrapper>{element}</PageWrapper>} />
        ))}
      </Routes>
    </Suspense>
  );
};
