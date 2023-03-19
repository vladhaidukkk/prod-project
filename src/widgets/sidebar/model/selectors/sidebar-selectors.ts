import { createSelector } from '@reduxjs/toolkit';
import { selectAuthViewer } from 'entities/auth';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import { type SidebarItemType } from '../../types';

export const selectSidebarItems = createSelector(selectAuthViewer, (viewer) => {
  const items: SidebarItemType[] = [
    {
      path: RoutePaths[RouteNames.Main],
      text: 'Home',
      Icon: HomeIcon,
    },
    {
      path: RoutePaths[RouteNames.About],
      text: 'About',
      Icon: AboutIcon,
    },
  ];

  if (viewer) {
    items.push(
      {
        path: RoutePaths[RouteNames.Profile] + viewer.id,
        text: 'Profile',
        Icon: ProfileIcon,
      },
      {
        path: RoutePaths[RouteNames.Articles],
        text: 'Articles',
        Icon: ArticleIcon,
      }
    );
  }

  return items;
});
