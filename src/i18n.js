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
             back: { label: 'voltar' },
             li1: { label: 'exibições', },
             li2: { label: 'sobre', },
             li3: { label: 'publicações', },
             about: { label: 'Estabelecido em Porto Alegre, desde 2016, Palácio é uma Instituição situada em um espaço centenário no Centro Histórico da cidade. Apresenta exibições periódicas em formatos singulares, com visitas realizadas sob agendamento prévio.' },
             address: { label: 'Porto Alegre, Brasil' },
             infos: { label: 'Informações e agendamentos:' },
             dateTerrestre: { label: '05 de Maio - 05 de Julho, 2018' },
             datePE: { label: '09 de Março - 22 de Abril, 2018' },
             dateNE: { label: '19 de agosto - 05 de outubro, 2017' },
             dateImaterial: { label: '05 de maio - 02 de julho, 2017' },
             PEDescription: { label: 'Palácio apresenta Potencial Evolutivo, uma exibição de Andrés Stephanou.' },
             PEDescription2: { label: "Recortes iconográficos do presente de cenários que deixarão de existir no futuro. Em Noturno (2018), filme de curta-metragem (duração 16min), explora-se postos de combustíveis funcionando durante a transitória de uma única madrugada. Com a previsão da extinção do uso de combustão fóssil em automóveis nas próximas décadas, em uma visão futurista, como consequência, tais postos de combustíveis e automotores tornarão-se obsoletos em presença - com sua atual configuração. Filmado em 4K, sob uma proposta visual e sonora de estética terrestre-espacial, cria-se como motriz central do filme, um cenário poético, narrativo e de relação entre a obsolescência programada de postos de combustíveis fósseis, e um carro dependente dos mesmos." },
             PEDescription3: { label: "Impalpável, na primeira sala da Insituição, uma linha fina é projetada no espaço. Construída digitalmente, num movimento de sentido horário contínuo, executa seu processo de 60 segundos. Um paralelo entre a dimensão visual gerada pela obra e sua presença no espaço, em conjunto à noção de passagem do tempo. " },
             PEDescription4: { label: "No espaço seguinte, fixada na parede, instrumentaliza-se uma placa de fibra de carbono como emblema visual de um futuro próximo. Matéria-prima sintética de alta performance, tende-se o uso abundante, pela sua versatilidade - rigidez e leveza -, em diversos cenários nas próximas décadas. Desconstruindo os papéis funcionais, evidencia-se o estético-visual puro da matéria, e a influência presencial abstrata gerada quando uma amostra de fibra de carbono é disposta livre - fora de seu campo de atuação. Em um ambiente de proposta exibitiva e contemplativa, exclusa de ação externa." },
             PEDescription5: { label: "Uma instalação proposta a partir de uma faixa de audio de longa duração, concebida por um pequeno dispositivo sonoro, é apresentada no segundo andar, em um espaço sob iluminação azul. Com uma estética mínima e densa, composta por pulsações (timbres graves em sequência), é empregada ao expectador, de modo introspectivo, como trilha do tempo presente: acelerado e intenso, com ares futurísticos." },
             PEDescription6: { label: "Em composição ao espaço vazio, uma faixa adesiva refletiva e fluorescente é incorporada - componente empregado na sinalização noturna urbana e em identidades visuais modernas. Devido a fluorescência sintética da cor, o expectador é induzido, automaticamente, a concentrar toda energia da sala na presença do material, existente de forma mínima no ambiente." },
             PEDescription7: { label: "A exibição resulta em um conjunto de obras de diálogo singular - técnico, compacto e circular, de inter-relação direta ou indireta. Sob tonalidade metafórica, todas obras são manufaturadas; industrialmente ou digitalmente. Não há contato manual direto entre o artista e a produção das mesmas, apenas a concepção para fabricação e montagem." },
             PEDescription8: { label: "Andrés Stephanou (1993, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." }
           },
         },
         en: {
           translation: {
             back: { label: 'back' },
             li1: { label: 'exhibitions', },
             li2: { label: 'about', },
             li3: { label: 'publications', },
             about: { label: 'Established in Porto Alegre, since 2016, Palácio is an institution located in a centennial space in the Historic Center of the city. Presenting periodic exhibitions in singular formats, with visits made under previous scheduling.' },
             address: { label: 'Porto Alegre, Brazil' },
             infos: { label: 'Information and schedules:' },
             dateTerrestre: { label: 'May 5 - June 5, 2018' },
             datePE: { label: 'March 9 - April 22, 2018' },
             dateNE: { label: 'August 19 - October 5, 2017'},
             dateImaterial: { label: 'May 5 - June 2, 2017' },
             PEDescription: { label: "Palácio presents Potencial Evolutivo, an exhibition of Andrés Stephanou." },
             PEDescription2: { label: "Present time iconographic clippings of scenarios that won't exist in the future. Noturno (2018), a short length film (duration 16min), explores gas stations operating during a single night. In a futuristic vision, with the expected extinction of fossil fuel use in cars, as a consequence, such gas stations and automobiles will become obsolete in presence - with its current configuration. Filmed in 4K, under a visual and sounding proposal of terrestrial-spatial aesthetic, it's created as the central point of the film, a poetic, narrative and relational scenery between the programmed obsolescence of fossil fuel stations, and a car-dependent on them." },
             PEDescription3: { label: "Impalpable, in the first room of the Institute, a thin line is projected into space. Digitally built, in a constant clockwise direction movement, executes a 60-second process. A parallel between the visual dimension proposed by the work and its presence in space, with the notion of the passage of time." },
             PEDescription4: { label: "In the following space, attached to the wall, a carbon fiber plate is instrumentalized as a visual emblem from a near future. As a high-performance synthetic raw material, the abundant use is foreseen, due to its versatility - rigidity and lightness -, in several scenarios in the next decades. Deconstructing the functional roles is evidenced the pure visual-aesthetic of the material and the influence of the abstract presence generated when a sample of carbon fiber is freely disposed - out of its field of use. In an environment of a contemplative proposal, excluded from the external action." },
             PEDescription5: { label: "An installation proposed from a long duration audio track, generated by a small sound speaker, is presented on the second floor, in a space under blue lighting. With a minimal and dense aesthetic, composed with a bass pulsing in a long-sequence, acts to the viewer as a soundtrack of the present time: accelerated and intense, with a futuristic semblance." },
             PEDescription6: { label: "In composition with the empty space, a fluorescent and reflective adhesive strip are incorporated - used in urban night signaling and in modern visual identities. Due to the synthetic fluorescence, the spectator automatically concentrates all energy of the room in the presence of the material, existent in a minimal format in the environment." },
             PEDescription7: { label: "The exhibition results in a set of works with a singular dialogue - technical, compact and circular, with a direct or indirect interrelationship. Under a metaphorical tonality, all the works are manufactured; industrially or digitally. There is no direct manual contact between the artist and the production of the same, only the conception for manufacturing and assembly." },
             PEDescription8: { label: "Andrés Stephanou (1993, Porto Alegre) lives and works in Porto Alegre, Brasil." }
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
