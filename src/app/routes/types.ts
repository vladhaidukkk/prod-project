import { type RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authRequired?: boolean;
};
