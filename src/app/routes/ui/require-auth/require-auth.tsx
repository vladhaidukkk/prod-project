import { selectAuthViewer } from 'entities/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import { useAppSelector } from 'shared/utils/hooks';

type RequireAuthProps = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const viewer = useAppSelector(selectAuthViewer);
  const location = useLocation();

  if (!viewer) {
    return <Navigate to={RoutePaths[RouteNames.Main]} state={{ from: location }} replace />;
  }

  return children;
};
