import { I18nManager } from 'react-native'
import i18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./translations/en.json'), // eslint-disable-line global-require
  es: () => require('./translations/es.json'), // eslint-disable-line global-require
}

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false }

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback
  // update layout direction
  I18nManager.forceRTL(isRTL)
  // set i18n-js config
  i18n.fallbacks = true
  i18n.defaultLocale = 'en'
  i18n.missingTranslationPrefix = '#####: '
  i18n.missingBehaviour = 'guess'
  i18n.translations = {
    [languageTag]: translationGetters[
      languageTag as keyof typeof translationGetters
    ](),
  }
  i18n.locale = languageTag
}
