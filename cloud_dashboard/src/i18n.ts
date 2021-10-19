import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
    }
  }
};

export const LANGUAGE_LIST = [
  { key: 'en', value: 'English' },
  { key: 'ja', value: '日本語' }
]

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
