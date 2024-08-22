// eslint-disable-next-line no-use-before-define
export type Locale = (typeof locales)[number]

export const locales = ['en', 'pt'] as const
export const defaultLocale: Locale = 'pt'
