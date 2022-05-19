import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            alwaysFormat: false,
        },
        backend: {
            /*
            for ignoring the call of the interpolator service: https://github.com/i18next/i18next-http-backend/blob/9b6e3cef1839aee7bf6c0f2c0668a54b55486dc6/lib/index.js#L63
            so we can use "/" seperated namespaces
             */
            loadPath: (lngs, namespaces) => `/locales/${lngs[0]}/${namespaces[0]}.json`
        }
    });

export default i18n;