export interface Translation<T> {
  translate: any
  language: AvailableLanguages
  updateLanguage: (language: AvailableLanguages) => void
}

export type AvailableLanguages = 'en' | 'pt-BR'
