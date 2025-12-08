import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
  en: { translation: en },
  de: { translation: de },
};

// Get language from URL path
const getLanguageFromPath = (): string | null => {
  const path = window.location.pathname;
  const match = path.match(/^\/(en|de)(\/|$)/);
  return match ? match[1] : null;
};

// Custom language detector that prioritizes URL path
const pathLanguageDetector = {
  name: 'pathDetector',
  lookup: () => getLanguageFromPath(),
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(pathLanguageDetector);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['pathDetector', 'navigator'],
      caches: [],
    },
  });

export const supportedLanguages = ['en', 'de'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

export default i18n;
