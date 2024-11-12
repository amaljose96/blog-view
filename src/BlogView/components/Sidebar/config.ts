import { IconName } from 'BlogView/pearls/Icon';

export const sidebarOptions = [
  {
    key: 'homepage',
    route: '/',
    icon: 'home' as IconName,
  },
  {
    key: 'recent',
    route: '/recently-opened-articles',
    icon: 'recent' as IconName,
  },
  {
    key: 'saved',
    route: '/saved-articles',
    icon: 'saved' as IconName,
  },
];
