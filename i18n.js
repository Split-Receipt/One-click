import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: esTranslation
        },
        ru: {
            translation: ruTranslation
        }
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n;