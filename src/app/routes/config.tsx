import { lazy } from 'react';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import { type AppRouteProps } from './types';

const MainPage = lazy(() => import('pages/main'));
const AboutPage = lazy(() => import('pages/about'));
const ProfilePage = lazy(() => import('pages/profile'));
const NotFoundPage = lazy(() => import('pages/not-found'));

export const routes: AppRouteProps[] = [
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
    authRequired: true,
  },
  {
    path: RoutePaths[RouteNames.NotFound],
    element: <NotFoundPage />,
  },
];
