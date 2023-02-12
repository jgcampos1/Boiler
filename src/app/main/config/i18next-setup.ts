import { initReactI18next } from 'react-i18next'

import i18next, { type InitOptions } from 'i18next'
import Backend from 'i18next-http-backend'

const availableLanguages = ['pt-BR']

const translationOptions: InitOptions = {
  lng: 'pt-BR',
  load: 'currentOnly',
  preload: availableLanguages,
  debug: false,
  supportedLngs: availableLanguages,
  fallbackLng: 'pt-BR',
  defaultNS: 'common',
  ns: ['common'],
  react: {
    useSuspense: true
  },
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
}

export default i18next
  .use(Backend)
  .use(initReactI18next)
  .init(translationOptions)
