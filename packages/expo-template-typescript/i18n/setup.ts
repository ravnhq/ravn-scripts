import i18n from 'i18n-js'
import * as Localization from 'expo-localization'

import en from './translations/en.json'
import es from './translations/es.json'
import fr from './translations/fr.json'

i18n.fallbacks = true
i18n.defaultLocale = 'en'
i18n.missingTranslationPrefix = '#####: '
i18n.missingBehaviour = 'guess'
i18n.translations = { fr, en, es }
i18n.locale = Localization.locale
