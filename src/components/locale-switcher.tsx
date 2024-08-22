import { useLocale } from 'next-intl'

import { LocaleSwitcherSelect } from '@/components/locale-switcher-select'

export function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'pt',
          label: 'PT',
        },
        {
          value: 'en',
          label: 'EN',
        },
      ]}
    />
  )
}
