import { lazy, Suspense } from 'react';
import { Routes, Route, RouteProps } from 'react-router-dom';
import { RouteNames, RoutePaths } from 'shared/config/routes';

const MainPage = lazy(() => import('./main'));
const AboutPage = lazy(() => import('./about'));

const routes: RouteProps[] = [
  {
    path: RoutePaths[RouteNames.Main],
    element: <MainPage />,
  },
  {
    path: RoutePaths[RouteNames.About],
    element: <AboutPage />,
  },
];

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Routing;
