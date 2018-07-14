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
             infos: { label: 'Informações e agendamentos:' },
             dateTerrestre: { label: '05 de Maio - 05 de Julho, 2018' },
             datePE: { label: '09 de Março - 22 de Abril, 2018' },
             dateNE: { label: '19 de agosto - 05 de outubro, 2017' },
             dateImaterial: { label: '05 de maio - 02 de julho, 2017' }
           },
         },
         en: {
           translation: {
             li1: { label: 'exhibitions', },
             li2: { label: 'about', },
             li3: { label: 'publications', },
             about: { label: 'Established in Porto Alegre, since 2016, Palácio is an institution located in a centennial space in the Historic Center of the city. Presenting periodic exhibitions in singular formats, with visits made under previous scheduling.' },
             address: { label: 'Porto Alegre, Brazil' },
             infos: { label: 'Information and schedules:' },
             dateTerrestre: { label: 'May 5 - June 5, 2018' },
             datePE: { label: 'March 9 - April 22, 2018' },
             dateNE: { label: 'August 19 - October 5, 2017'},
             dateImaterial: { label: 'May 5 - June 2, 2017' }
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
