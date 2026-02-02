import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Language } from '@/types'

export function useLocale() {
  const { locale, t } = useI18n()

  const currentLocale = computed(() => locale.value as Language)

  const availableLocales: Language[] = ['en', 'it', 'el']

  const changeLocale = (lang: Language) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
  }

  const getLocaleName = (lang: Language): string => {
    const names: Record<Language, string> = {
      en: 'English',
      it: 'Italiano',
      el: 'Ελληνικά'
    }
    return names[lang]
  }

  return {
    currentLocale,
    availableLocales,
    changeLocale,
    getLocaleName,
    t
  }
}
