import { DEFAULT_LOCALE_i18n, LOCALES_i18n } from '@/config/i18n';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES_i18n,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE_i18n,
});
