import { IconName } from 'BlogView/pearls/Icon';

export const sidebarOptions = [
  {
    key: 'homepage',
    text: 'Home',
    route: '/',
    icon: 'home' as IconName,
  },
  {
    key: 'recent',
    text: 'Recent Articles',
    route: '/recent',
    icon: 'recent' as IconName,
  },
  {
    key: 'saved',
    text: 'Saved Articles',
    route: '/saved',
    icon: 'saved' as IconName,
  },
];
