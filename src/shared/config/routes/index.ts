export const enum RouteNames {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  NotFound = 'not-found',
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.Main]: '/',
  [RouteNames.About]: '/about',
  [RouteNames.Profile]: '/profile',
  [RouteNames.NotFound]: '*',
};
