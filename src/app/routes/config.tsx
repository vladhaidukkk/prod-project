import { lazy } from 'react';
import { type RouteProps } from 'react-router-dom';
import { RouteNames, RoutePaths } from 'shared/config/routes';

const MainPage = lazy(async () => await import('pages/main'));
const AboutPage = lazy(async () => await import('pages/about'));

export const routes: RouteProps[] = [
  {
    path: RoutePaths[RouteNames.Main],
    element: <MainPage />,
  },
  {
    path: RoutePaths[RouteNames.About],
    element: <AboutPage />,
  },
];
