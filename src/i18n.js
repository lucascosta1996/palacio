import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import LocizeEditor from 'locize-editor';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';


i18n
  .use(LocizeBackend)
  .use(LocizeEditor)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'pt',
    appendNamespaceToCIMode: true,
    saveMissing: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,
    keySeparator: '### not used ###', // we use content as keys

    backend: {
      projectId: '41a5bfc3-e5a7-4155-bb96-841eb9ef9020', // <-- replace with your projectId
      apiKey: 'a742faa4-9cf2-403a-846e-f47f84a99aac',
      referenceLng: 'pt'
    },

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    },

    react: {
      wait: true
    }
  });


export default i18n;
