export const enum RouteNames {
  Main = 'main',
  About = 'about',
  NotFound = 'not-found',
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.Main]: '/',
  [RouteNames.About]: '/about',
  [RouteNames.NotFound]: '*',
};
