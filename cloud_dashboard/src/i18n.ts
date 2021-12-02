import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Conversion information for translating text.
const resources: { [key: string]: { translation: { [key: string]: string } } } = {
  en: {
    translation: {
      'Language': 'Language',
      'CloudConfig': 'Cloud Config',
      'languageName': 'English',
      'Home': 'Home',
      'User': 'User',
      'Logout': 'Logout',
      'ItemCount': 'Item Count',
      'All': 'All',
    }
  },
  ja: {
    translation: {
      'Language': '使用言語',
      'CloudConfig': '管理',
      'languageName': '日本語',
      'Home': 'ホーム',
      'User': 'ユーザー情報',
      'Logout': 'ログアウト',
      'ItemCount': '件数',
      'All': 'すべて',
    }
  }
};

// List of languages to be translated.
export const LANGUAGE_LIST = [
  { key: 'en', value: 'English' },
  { key: 'ja', value: '日本語' }
]

// Initialize the conversion process.
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
