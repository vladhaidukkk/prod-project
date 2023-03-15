import { lazy } from 'react';
import { type RouteProps } from 'react-router-dom';
import { RouteNames, RoutePaths } from 'shared/config/routes';

const MainPage = lazy(() => import('pages/main'));
const AboutPage = lazy(() => import('pages/about'));
const ProfilePage = lazy(() => import('pages/profile'));
const NotFoundPage = lazy(() => import('pages/not-found'));

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

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
    authOnly: true,
  },
  {
    path: RoutePaths[RouteNames.NotFound],
    element: <NotFoundPage />,
  },
];
