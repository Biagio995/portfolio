import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import it from '@/locales/it.json'
import el from '@/locales/el.json'

const messages = {
  en,
  it,
  el
}

const savedLocale = localStorage.getItem('lang') || 'en'

export default createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})
