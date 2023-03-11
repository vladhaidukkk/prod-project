import { lazy } from 'react';
import { type RouteProps } from 'react-router-dom';
import { RouteNames, RoutePaths } from 'shared/config/routes';

const MainPage = lazy(() => import('pages/main'));
const AboutPage = lazy(() => import('pages/about'));
const ProfilePage = lazy(() => import('pages/profile'));
const NotFoundPage = lazy(() => import('pages/not-found'));

export const routes: RouteProps[] = [
  {
    path: RoutePaths[RouteNames.Main],
    element: <MainPage />,
  },
  {
    path: RoutePaths[RouteNames.About],
    element: <AboutPage />,
  },
  {
    path: RoutePaths[RouteNames.Profile],
    element: <ProfilePage />,
  },
  {
    path: RoutePaths[RouteNames.NotFound],
    element: <NotFoundPage />,
  },
];
