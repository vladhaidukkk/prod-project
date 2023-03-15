import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RouteNames, RoutePaths } from 'shared/config/routes';
import { type SidebarItemType } from './types';

export const sidebarItems: SidebarItemType[] = [
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
  {
    path: RoutePaths[RouteNames.Profile],
    text: 'Profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
