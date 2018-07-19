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
             dateTesting: { label: '15 de Novembro 2018 - 19 de Janeiro 2019' },
             dateTerrestre: { label: '05 de Maio - 05 de Julho, 2018' },
             datePE: { label: '09 de Março - 22 de Abril, 2018' },
             dateNE: { label: '19 de agosto - 05 de outubro, 2017' },
             dateImaterial: { label: '05 de maio - 02 de julho, 2017' },
             PEDescription: { label: 'Palácio apresenta Potencial Evolutivo, uma exibição de Andrés Stephanou.' },
             PEDescription2: { label: "Recortes iconográficos do presente de cenários que deixarão de existir no futuro. Em Noturno (2018), filme de curta-metragem (16min), explora-se postos de combustíveis funcionando durante a transitória de uma única madrugada. Com a previsão da extinção do uso de combustão fóssil em automóveis nas próximas décadas, em uma visão futurista, como consequência, tais postos de combustíveis e automotores tornarão-se obsoletos em presença - com sua atual configuração. Filmado em 4K, sob uma proposta visual e sonora de estética terrestre-espacial, cria-se como motriz central do filme, um cenário poético, narrativo e de relação entre a obsolescência programada de postos de combustíveis fósseis, e um carro dependente dos mesmos." },
             PEDescription3: { label: "Impalpável, na primeira sala da Insituição, uma linha fina é projetada no espaço. Construída digitalmente, num movimento de sentido horário contínuo, executa seu processo de 60 segundos. Um paralelo entre a dimensão visual gerada pela obra e sua presença no espaço, em conjunto a noção de passagem do tempo. " },
             PEDescription4: { label: "No espaço seguinte, fixada na parede, instrumentaliza-se uma placa de fibra de carbono como emblema visual de um futuro próximo. Matéria-prima sintética de alta performance, tende-se o uso abundante, pela sua versatilidade - rigidez e leveza -, em diversos cenários nas próximas décadas. Desconstruindo os papéis funcionais, evidencia-se o estético-visual puro da matéria, e a influência presencial abstrata gerada quando uma amostra de fibra de carbono é disposta livre - fora de seu campo de atuação. Em um ambiente de proposta exibitiva e contemplativa, exclusa de ação externa." },
             PEDescription5: { label: "Uma instalação proposta a partir de uma faixa de audio de longa duração, concebida por um pequeno dispositivo sonoro, é apresentada no segundo andar, em um espaço sob iluminação azul. Com uma estética mínima e densa, composta por pulsações (timbres graves em sequência), é empregada ao espectador, de modo introspectivo, como trilha do tempo presente: acelerado e intenso, com ares futurísticos." },
             PEDescription6: { label: "Em composição ao espaço vazio, uma faixa adesiva refletiva e fluorescente é incorporada - componente empregado na sinalização noturna urbana e em identidades visuais modernas. Devido a fluorescência sintética da cor, o espectador é induzido, automaticamente, a concentrar toda energia da sala na presença do material, existente de forma mínima no ambiente." },
             PEDescription7: { label: "A exibição resulta em um conjunto de obras de diálogo singular - técnico, compacto e circular, de inter-relação direta ou indireta. Sob tonalidade metafórica, todas obras são manufaturadas; industrialmente ou digitalmente. Não há contato manual direto entre o artista e a produção das mesmas, apenas a concepção para fabricação e montagem." },
             PEDescription8: { label: "Andrés Stephanou (1993, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." },
             duration: { label: "duração 16''35'" },
             PEpdf: { label: "andres-PotencialEvolutivoPT" },
             NEpdf: { label: "emerson-novasespeciesPT" },
             Terrestrepdf: { label: "emerson-terrestrePT" },
             download: { label: "Download PDF (PT)" },
             moreInfo: { label: "mais informações contato@ppalacio.xyz" },
             TerrestreDescription1: { label: "Palácio apresenta Terrestre, uma exibição de Emerson da Silva. Um filme e duas instalações são apresentadas, durante o período de dois meses."},
             TerrestreDescription2: { label: "Em Adaptação reversa (2018), filme de longa metragem, explora-se a plasticidade resultante da relação, positiva ou negativa, entre o homem e o meio em que habita. Casos materializados dessa interação são documentados, como a conversão da força do vento em energia eólica útil - através de aerogeradores - e o soterramento de construções em áreas de dunas - causado pela ação do curso natural do vento. Registra-se processos de ação e reação da natureza em contrapartida à intervenções humanas."},
             TerrestreDescription3: { label: "Na primeira sala da Instituição, uma instalação composta por metal, terra e grama propõe a contemplação de uma amostra de solo da Terra. Adaptada ao formato imposto pela estrutura da obra, sob as condições do espaço em que foi instalada, a grama teve seu ciclo de vida observado durante os dois meses em que foi exibida. Desde o momento de sua extração da superfície terrestre, até a sua completa sucumbição por falta de nutrientes." },
             TerrestreDescription4: { label: "Em um círculo de relação, instalada na parede de uma das salas, é introduzido um paralelo entre o ciclo de desenvolvimento natural de um vegetal e a criação de um pequeno ecossistema. Sementes germinadas em terra preta são apresentadas como amostragem de material terrestre vivo. Em constante processo, seu curso de vida é observado pelo espectador, desde o nascimento." },
             TerrestreDescription5: { label: "Diariamente, as instalações apresentadas modificam-se devido ao seu processo natural, estabelecido através dos formatos de apresentação e as condições dispostas nos espaços da Instituição. Sob uma abordagem científica e poética, Terrestre resulta  em uma exibição de constante e mínima mudança visual, constituída em sua essência, por matéria-prima viva; de diálogo conceitual circular entre as obras."},
             TerrestreDescription6: { label: "Emerson da Silva (1988, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." },
             NovasEspecies1: { label: "Palácio apresenta Novas Espécies, primeira exibição individual de Emerson da Silva." },
             NovasEspecies2: { label: "Duas composições, em salas distintas, constituídas de modo aleatório em sua disposição de elementos, introduzem à representações abstratas de ecossistemas terrestres. Uma junção fluída de matérias-primas que dividem um mesmo espaço, replicando a interação natural e equilibrada que ocorre em recortes da natureza - a ocupação de um mesmo terreno por várias espécies, de modo harmônico e interativo. Bloco de cimento, tela de aço, acrílico, em conjunto a composições de dispositivos de luz, sobre tecido branco, compõem as obras. Em ambientação escura, uma luz negra amplifica a presença das obras, maximizando a relação com o espaço." },
             NovasEspecies3: { label: "Em um local selecionado para coletagem, três placas de Petri são dispostas no solo para uma coleta de amostras de matéria microbiota proveveniente do ambiente. Resulta-se, durante o tempo de exibição, a criação de um conjunto de espécies provenientes de um local específico, formados através de uma equação de seleção natural microbiota única - de replicagem inconcebível. O processo é documentado e apresentado em três fotos, induzindo o espectador à atmosfera espacial do ambiente definido para as coletas." },
             NovasEspecies4: { label: "As unidades coletadas são dispostas em conjunto na exibição, em uma parede do espaço vazio. Separadamente, a partir de um processo de clonagem da matéria coletada, outras três espécies são inoculadas; sob o mesmo modo de apresentação, em outra sala." },
             NovasEspecies5: { label: "Como pilares principais para concepção da exibição, Novas Espécies basea-se na criação e representação de composições entre seres, em conjunto à estética resultante da capacidade de variação infinita e irreplicável destes processos. O artificial e o orgânico-natural, o processo científico teórico e a criação de simulados materiais, em contraste e atuando em conjunto." },
             NovasEspecies6: { label: "Emerson da Silva (1988, Porto Alegre) vive e trabalha em Porto Alegre." }
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
             dateTesting: { label: 'November 15, 2018 - January 19, 2019' },
             dateTerrestre: { label: 'May 5 - June 5, 2018' },
             datePE: { label: 'March 9 - April 22, 2018' },
             dateNE: { label: 'August 19 - October 5, 2017'},
             dateImaterial: { label: 'May 5 - June 2, 2017' },
             PEDescription: { label: "Palácio presents Potencial Evolutivo, an exhibition of Andrés Stephanou." },
             PEDescription2: { label: "Present time iconographic clippings of scenarios that won't exist in the future. Noturno (2018), a short length film (16min), explores gas stations operating during a single night. In a futuristic vision, with the expected extinction of fossil fuel use in cars, as a consequence, such gas stations and automobiles will become obsolete in presence - with its current configuration. Filmed in 4K, under a visual and sounding proposal of terrestrial-spatial aesthetic, it's created as the central point of the film, a poetic, narrative and relational scenery between the programmed obsolescence of fossil fuel stations, and a car-dependent on them." },
             PEDescription3: { label: "Impalpable, in the first room of the Institute, a thin line is projected into space. Digitally built, in a constant clockwise direction movement, executes a 60-second process. A parallel between the visual dimension proposed by the work and its presence in space, with the notion of the passage of time." },
             PEDescription4: { label: "In the following space, attached to the wall, a carbon fiber plate is instrumentalized as a visual emblem from a near future. As a high-performance synthetic raw material, the abundant use is foreseen, due to its versatility - rigidity and lightness -, in several scenarios in the next decades. Deconstructing the functional roles is evidenced the pure visual-aesthetic of the material and the influence of the abstract presence generated when a sample of carbon fiber is freely disposed - out of its field of use. In an environment of a contemplative proposal, excluded from the external action." },
             PEDescription5: { label: "An installation proposed from a long duration audio track, generated by a small sound speaker, is presented on the second floor, in a space under blue lighting. With a minimal and dense aesthetic, composed with a bass pulsing in a long-sequence, acts to the viewer as a soundtrack of the present time: accelerated and intense, with a futuristic semblance." },
             PEDescription6: { label: "In composition with the empty space, a fluorescent and reflective adhesive strip are incorporated - used in urban night signaling and in modern visual identities. Due to the synthetic fluorescence, the spectator automatically concentrates all energy of the room in the presence of the material, existent in a minimal format in the environment." },
             PEDescription7: { label: "The exhibition results in a set of works with a singular dialogue - technical, compact and circular, with a direct or indirect interrelationship. Under a metaphorical tonality, all the works are manufactured; industrially or digitally. There is no direct manual contact between the artist and the production of the same, only the conception for manufacturing and assembly." },
             PEDescription8: { label: "Andrés Stephanou (1993, Porto Alegre) lives and works in Porto Alegre, Brasil." },
             duration: { label: "duration 16''35'" },
             PEpdf: { label: "andres-PotencialEvolutivoEN" },
             Terrestrepdf: { label: "emerson-terrestreEN" },
             NEpdf: { label: "emerson-novasespeciesEN" },
             download: { label: "Download PDF (EN)" },
             moreInfo: { label: "for more informations contato@ppalacio.xyz" },
             TerrestreDescription1: { label: "Palácio presents Terrestre, an exhibition of Emerson da Silva. A film and two installations are presented, during a period of two months." },
             TerrestreDescription2: { label: "In the feature film Adaptação reversa (2018), is explored the plasticity resulting from the relationship, positive or negative, between the human and the environment in which he lives. Cases of this interaction are documented, such as the conversion of wind power into useful wind energy - through wind turbines - and the immersion of human constructions in dune areas - caused by the natural course of the wind action. Processes of action and reaction by nature in contrast to human interventions are recorded." },
             TerrestreDescription3: { label: "In the first room of the Institution, an installation composed of metal, soil, and grass proposes the contemplation of a ground sample of the Earth. Adapted to the format imposed by the structure of the work - under the conditions of the space in which it was installed - the grass had its life cycle observed during the two months it was exhibited. Since the moment of its extraction from the Earth's surface, to its complete succumbing for lack of nutrients." },
             TerrestreDescription4: { label: "In a relationship circle, installed in the wall of one of the rooms, a parallel is introduced between the cycle of natural development of a vegetable and a small ecosystem creation. Seeds germinated in the black soil are presented as a sampling of live terrestrial material. In a constant process, its life course is observed by the viewer, since the birth." },
             TerrestreDescription5: { label: "On a daily basis, the works presented change due to its natural process; established through the formats of presentation of the installations and the conditions arranged in the spaces of the Institution. Under a scientific and poetic approach, Terrestre results in an exhibition of constant and minimal visual change, constituted in its essence by living raw material; with a direct conceptual dialogue between the works." },
             TerrestreDescription6: { label: "Emerson da Silva (1988, Porto Alegre) lives and works in Porto Alegre, Brazil."},
             NovasEspecies1: { label: "Palácio presents Novas Espécies, the first individual exhibition of Emerson da Silva." },
             NovasEspecies2: { label: "Two compositions, in separate spaces, randomly constituted in their arrangement of elements, introduce to  abstract representations of terrestrial ecosystems. A fluid junction of raw materials that divide the same space, replicating the natural and balanced interaction that occurs in clippings of nature - the occupation of the same land by several species, in a harmonic and interactive way. Cement block, steel screen, acrylic,  with light device compositions, on a white textile, make up the works. In the dark room, a black light amplifies the presence of works and maximizes their relationship with space." },
             NovasEspecies3: { label: "At a selected site for collection, three Petri dishes are arranged in the soil - for a samples collect of microbiota material from the environment. During the time of the exhibition, it's created a set of species from a specific location, which is formed through a unique microbiota natural selection equation - of inconceivable replication. The process is documented and presented in three photos, inducing the viewer to the spatial atmosphere of the environment defined for the collections." },
             NovasEspecies4: { label: "The collected units are arranged together at the exhibition, in a wall of the empty space. Separately, generated from a process of cloning the collected matter, three other species are inoculated; under the same mode of presentation, in another room." },
             NovasEspecies5: { label: "As main pillars of the exhibition, Novas Espécies is based on the creation and representation of compositions between living beings, in conjunction with the aesthetic resulting from the capacity of infinite and irreplicable variation of these processes. The artificial and the organic-natural, the theoretical scientific process and the creation of simulated materials, in contrast, and acting together." },
             NovasEspecies6: { label: "Emerson da Silva (1988, Porto Alegre) lives and works in Porto Alegre, Brazil." }
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
