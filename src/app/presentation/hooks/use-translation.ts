import { useTranslation as i18NextUseTranslation } from 'react-i18next'
import { i18n } from 'i18next'
import { TFunction } from 'i18next'

import {
  AvailableLanguages,
  Translation
} from '../common/protocols/translation'

export const useTranslation = (
  namespace?: string | string[]
): Translation<TFunction> => {
  const {
    t,
    i18n: { language, changeLanguage }
  }: {
    t: any
    i18n: i18n
  } = i18NextUseTranslation(namespace)

  const translate = (text: string | string[], options?: any): string =>
    t(text, options)

  const updateLanguage = (newLanguage: AvailableLanguages): void => {
    changeLanguage(newLanguage)
  }

  return {
    translate,
    language: language as AvailableLanguages,
    updateLanguage
  }
}
