import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// Importamos los recursos directamente para desarrollo
import es from './locales/es.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es }
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
      escapeValue: false // React ya escapa los valores
    }
  })

export default i18n