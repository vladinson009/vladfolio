// Used when no locale matches
export const DEFAULT_LOCALE_i18n = 'en' as const;

// A list of all locales that are supported
export const LOCALES_i18n = ['en', 'no'] as const;

// A list of locale map
export const localeMap: Record<(typeof LOCALES_i18n)[number], string> = {
  en: 'English',
  no: 'Norsk',
};
