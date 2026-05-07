// ! KEEP IN SYNC WITH TESTS => TRANSLATIONS
export const NAVIGATION_ITEMS = [
  {
    key: 'about-me',
    href: '/about-me',
  },
  {
    key: 'more',
    href: '/more',
  },
  {
    key: 'projects',
    href: '/projects',
  },
  {
    key: 'home',
    href: '/home',
  },
] as const;

export type NavigationKey = (typeof NAVIGATION_ITEMS)[number]['key'];
