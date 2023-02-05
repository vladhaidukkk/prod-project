export const enum RouteNames {
  Main = 'main',
  About = 'about',
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.Main]: '/',
  [RouteNames.About]: '/about',
};
