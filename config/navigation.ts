// ! KEEP IN SYNC WITH TESTS => TRANSLATIONS
export const NAVIGATION_ITEMS = [
  {
    key: 'more',
    href: '/more',
  },
  {
    key: 'about-me',
    href: '/about-me',
  },
  {
    key: 'certificates',
    href: '/certificates',
  },
  {
    key: 'projects',
    href: '/projects',
  },
  {
    key: 'home',
    href: '/',
  },
] as const;

export type NavigationKey = (typeof NAVIGATION_ITEMS)[number]['key'];
