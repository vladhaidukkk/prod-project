export const enum RouteNames {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  Articles = 'articles',
  ArticleDetails = 'article-details',
  NotFound = 'not-found',
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.Main]: '/',
  [RouteNames.About]: '/about',
  [RouteNames.Profile]: '/profile/', // :id
  [RouteNames.Articles]: '/articles',
  [RouteNames.ArticleDetails]: '/articles/', // :id
  [RouteNames.NotFound]: '*',
};
