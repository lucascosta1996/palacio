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
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },

    lng: 'pt',

    resources: {
         pt: {
           translation: {
             li1: { label: 'exibições', },
             li2: { label: 'sobre', },
             li3: { label: 'publicações', },
             about: { label: 'Estabelecido em Porto Alegre, desde 2016, Palácio é uma Instituição situada em um espaço centenário no Centro Histórico da cidade. Apresenta exibições periódicas em formatos singulares, com visitas realizadas sob agendamento prévio.' },
             address: { label: 'Porto Alegre, Brasil' },
             infos: { label: 'Informações e agendamentos:' }
           },
         },
         en: {
           translation: {
             li1: { label: 'exhibitions', },
             li2: { label: 'about', },
             li3: { label: 'publications', },
             about: { label: 'Established in Porto Alegre, since 2016, Palácio is an institution located in a centennial space in the Historic Center of the city. Presenting periodic exhibitions in singular formats, with visits made under previous scheduling.' },
             address: { label: 'Porto Alegre, Brazil' },
             infos: { label: 'Information and schedules:' }
           },
         },
       },

    /*backend: {
      projectId: '41a5bfc3-e5a7-4155-bb96-841eb9ef9020', // <-- replace with your projectId
      apiKey: 'a742faa4-9cf2-403a-846e-f47f84a99aac',
      referenceLng: 'pt'
    },*/

  });


export default i18n;
