import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es/translation.json';
import ruTranslation from './locales/ru/translation.json';

const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';

i18n.use(initReactI18next).init({
    lng: savedLanguage,
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