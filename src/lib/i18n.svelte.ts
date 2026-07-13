import i18next from 'i18next';
import en from './i18n/en.json' with { type: 'json' };
import ja from './i18n/ja.json' with { type: 'json' };

export type AvailableLocale = 'en' | 'ja';

type I18nOption = {
    locale: AvailableLocale,
    language: string
}

export const i18nList: I18nOption[] = [
    {
        locale: "en",
        language: "English"
    },
    {
        locale: "ja",
        language: "日本語"
    }
];

i18next.init({
    lng: 'en',
    fallbackLng: 'en',
    resources: { 
        en: { translation: en },
        ja: { translation: ja }
    },
    interpolation: { escapeValue: false }
});

let currentLocale = $state<AvailableLocale>(i18next.language as AvailableLocale);
let currentLanguage = $derived(i18nList.find(item => item.locale === currentLocale)?.language ?? "English");

export const i18n = {
    get locale(): AvailableLocale {
        return currentLocale;
    },

    set locale(value: AvailableLocale) {
        i18next.changeLanguage(value);
        currentLocale = value;
    },

    get language(): string {
        return currentLanguage;
    },

    t(key: string | undefined | null): string {
        if (!key) return i18next.t('general.badRequest');
        currentLocale;
        return i18next.t(key);
    }
};