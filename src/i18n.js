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
             infos: { label: 'Informações:' },
             foundation: { label: "fundação da instituição" },
             foundationDate: { label: "26 de Outubro, 2016" },
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
             Imaterialpdf: { label: "AndresStephanou-Imaterial2017PT" },
             Terrestrepdf: { label: "emerson-terrestrePT" },
             download: { label: "Download PDF (PT)" },
             moreInfo: { label: "mais informações contato@ppalacio.xyz" },
             TerrestreDescription1: { label: "Palácio apresenta Terrestre, uma exibição de Emerson da Silva. Um filme e duas instalações são apresentadas, durante o período de dois meses."},
             TerrestreDescription2: { label: "Em Adaptação reversa (2018), filme de longa metragem, explora-se a plasticidade resultante da relação, positiva ou negativa, entre o homem e o meio em que habita. Casos materializados dessa interação são documentados, como a conversão da força do vento em energia eólica útil - através de aerogeradores - e o soterramento de construções em áreas de dunas - causado pela ação do curso natural do vento. Registra-se processos de ação e reação da natureza em contrapartida à intervenções humanas."},
             TerrestreDescription3: { label: "Na primeira sala da Instituição, uma instalação composta por metal, terra e grama propõe a contemplação de uma amostra de solo da Terra. Adaptada ao formato imposto pela estrutura da obra, sob as condições do espaço em que foi instalada, a grama teve seu ciclo de vida observado durante os dois meses em que foi exibida. Desde o momento de sua extração da superfície terrestre, até a sua completa sucumbição por falta de nutrientes." },
             TerrestreDescription4: { label: "Em um círculo de relação, instalada na parede de uma das salas, é introduzido um paralelo entre o ciclo de desenvolvimento natural de um vegetal e a criação de um pequeno ecossistema. Sementes germinadas em terra preta são apresentadas como amostragem de material terrestre vivo. Em constante processo, seu curso de vida é observado pelo espectador, desde o nascimento." },
             TerrestreDescription5: { label: "Diariamente, as instalações apresentadas modificam-se devido ao seu processo natural, estabelecido através dos formatos de apresentação e as condições dispostas nos espaços da Instituição. Sob uma abordagem científica e poética, Terrestre resulta  em uma exibição de constante e mínima mudança visual, constituída em sua essência, por matéria-prima viva; de diálogo conceitual circular entre as obras."},
             TerrestreDescription6: { label: "Emerson da Silva (1988, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." },
             NovasEspeciesDescription1: { label: "Palácio apresenta Novas Espécies, primeira exibição individual de Emerson da Silva." },
             NovasEspeciesDescription2: { label: "Duas composições, em salas distintas, constituídas de modo aleatório em sua disposição de elementos, introduzem à representações abstratas de ecossistemas terrestres. Uma junção fluída de matérias-primas que dividem um mesmo espaço, replicando a interação natural e equilibrada que ocorre em recortes da natureza - a ocupação de um mesmo terreno por várias espécies, de modo harmônico e interativo. Bloco de cimento, tela de aço, acrílico, em conjunto a composições de dispositivos de luz, sobre tecido branco, compõem as obras. Em ambientação escura, uma luz negra amplifica a presença das obras, maximizando a relação com o espaço." },
             NovasEspeciesDescription3: { label: "Em um local selecionado para coletagem, três placas de Petri são dispostas no solo para uma coleta de amostras de matéria microbiota proveveniente do ambiente. Resulta-se, durante o tempo de exibição, a criação de um conjunto de espécies provenientes de um local específico, formados através de uma equação de seleção natural microbiota única - de replicagem inconcebível. O processo é documentado e apresentado em três fotos, induzindo o espectador à atmosfera espacial do ambiente definido para as coletas." },
             NovasEspeciesDescription4: { label: "As unidades coletadas são dispostas em conjunto na exibição, em uma parede do espaço vazio. Separadamente, a partir de um processo de clonagem da matéria coletada, outras três espécies são inoculadas; sob o mesmo modo de apresentação, em outra sala." },
             NovasEspeciesDescription5: { label: "Como pilares principais para concepção da exibição, Novas Espécies basea-se na criação e representação de composições entre seres, em conjunto à estética resultante da capacidade de variação infinita e irreplicável destes processos. O artificial e o orgânico-natural, o processo científico teórico e a criação de simulados materiais, em contraste e atuando em conjunto." },
             NovasEspeciesDescription6: { label: "Emerson da Silva (1988, Porto Alegre) vive e trabalha em Porto Alegre." },
             ImaterialDescription1: { label: "Palácio apresenta Imaterial, primeira exibição individual de Andrés Stephanou. De 05 de maio à 02 de julho de 2017. " },
             ImaterialDescription2: { label: "Explorando a desmaterialização da obra de arte como campo e conceito, Imaterial é uma exibição condensada por arquivos digitais, em um único cartão micro SD. Materialmente impalpável, incorpora-se ao espaço através de dispositivos eletrônicos." },
             ImaterialDescription3: { label: "Existência e presença; uma proposta de reflexão à percepção do tempo e a sua passagem. Uma instalação sonora e três projeções compõem a exibição. De modo orquestrado, atuam centralizadas por um sistema baseado em uma escala de tempo, proposta como terreno para exibição. Em um ciclo de 120 minutos, dividido em dois estágios de 60 minutos, as projeções apresentadas sofrem, simultaneamente, minuto a minuto, um processo de solidificação ou dissolução de sua composição visual - inverso a cada hora." },
             ImaterialDescription4: { label: "Composta por frequências baixas, lineares e constantes, uma sonora dispersa em todo espaço sintetiza o ruído produzido pela pressão atmosférica terrestre - apresentada em conjunto às projeções e em salas materialmente vazias. Cinco caixas de som interconectadas por bluetooth são distribuídas nos dois andares da Instituição, de modo a unificar e reverberar a exibição em um sistema unificado e linear. Em uma sala  silenciosa, a sonora é proposta através de um headphone sem fio, para uso do espectador, pareado ao bluetooth da instalação." },
             ImaterialDescription5: { label: "Ao fim dos 120 minutos de processo completo, há um recesso de 10 minutos na exibição - com ambos os três espaços que hospedam as projeções tornando-se inteiramente vazios. Durante o intervalo, uma faixa de audio distinta é reproduzida; uma composição mínima de resquícios sonoros." },
             ImaterialDescription6: { label: "Incluso no sistema de escala de tempo proposto, projetado no espaço, uma linha fina materializa ou desmaterializa sua composição, em um processo quase imperceptível ao espectador. Sincronizadas, na primeira sala da exibição, uma faixa azul propõe o mesmo; ambas de formato espacial maleável." },
             ImaterialDescription7: { label: "60 pontos de luz são incorporados ao espaço. A cada minuto, um ponto branco, de modo aleatório, aparece ou desaparece - sob processo horalmente reverso. Gerada por algoritmos, pré-programada para que não haja repetição na disposição combinatória de pontos, a obra possui automação própria e, de forma mínima, opera para nunca ser a mesma; a cada minuto apresentar um estado visual único. Incorpora-se vida própria à obra, independente e auto-gestora de seu processo, em constante mutação." },
             ImaterialDescription8: { label: "A passagem do tempo, em conjunto à noção de presença no espaço, como eixos centrais para uma construção e apresentação totalmente digitais de Imaterial. Introduze-se à uma desmaterialização da obra de arte, com toda exibição sintetizada por um único micro cartão de armazenamento de arquivos digitais, O prédio torna-se uma cápsula, imerso pelo conceito e composição da exibição." },
             ImaterialDescription9: { label: "Andrés Stephanou (1993, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." }

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
             foundation: { label: "foundation of the institution" },
             foundationDate: { label: "October 26, 2016" },
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
             NEpdf: { label: "emerson-novasespeciesEN" },
             Terrestrepdf: { label: "emerson-terrestreEN" },
             Imaterialpdf: { label: "AndresStephanou-Imaterial2017EN" },
             download: { label: "Download PDF (EN)" },
             moreInfo: { label: "for more informations contato@ppalacio.xyz" },
             TerrestreDescription1: { label: "Palácio presents Terrestre, an exhibition of Emerson da Silva. A film and two installations are presented, during a period of two months." },
             TerrestreDescription2: { label: "In the feature film Adaptação reversa (2018), is explored the plasticity resulting from the relationship, positive or negative, between the human and the environment in which he lives. Cases of this interaction are documented, such as the conversion of wind power into useful wind energy - through wind turbines - and the immersion of human constructions in dune areas - caused by the natural course of the wind action. Processes of action and reaction by nature in contrast to human interventions are recorded." },
             TerrestreDescription3: { label: "In the first room of the Institution, an installation composed of metal, soil, and grass proposes the contemplation of a ground sample of the Earth. Adapted to the format imposed by the structure of the work - under the conditions of the space in which it was installed - the grass had its life cycle observed during the two months it was exhibited. Since the moment of its extraction from the Earth's surface, to its complete succumbing for lack of nutrients." },
             TerrestreDescription4: { label: "In a relationship circle, installed in the wall of one of the rooms, a parallel is introduced between the cycle of natural development of a vegetable and a small ecosystem creation. Seeds germinated in the black soil are presented as a sampling of live terrestrial material. In a constant process, its life course is observed by the viewer, since the birth." },
             TerrestreDescription5: { label: "On a daily basis, the works presented change due to its natural process; established through the formats of presentation of the installations and the conditions arranged in the spaces of the Institution. Under a scientific and poetic approach, Terrestre results in an exhibition of constant and minimal visual change, constituted in its essence by living raw material; with a direct conceptual dialogue between the works." },
             TerrestreDescription6: { label: "Emerson da Silva (1988, Porto Alegre) lives and works in Porto Alegre, Brazil."},
             NovasEspeciesDescription1: { label: "Palácio presents Novas Espécies, the first individual exhibition of Emerson da Silva." },
             NovasEspeciesDescription2: { label: "Two compositions, in separate spaces, randomly constituted in their arrangement of elements, introduce to  abstract representations of terrestrial ecosystems. A fluid junction of raw materials that divide the same space, replicating the natural and balanced interaction that occurs in clippings of nature - the occupation of the same land by several species, in a harmonic and interactive way. Cement block, steel screen, acrylic,  with light device compositions, on a white textile, make up the works. In the dark room, a black light amplifies the presence of works and maximizes their relationship with space." },
             NovasEspeciesDescription3: { label: "At a selected site for collection, three Petri dishes are arranged in the soil - for a samples collect of microbiota material from the environment. During the time of the exhibition, it's created a set of species from a specific location, which is formed through a unique microbiota natural selection equation - of inconceivable replication. The process is documented and presented in three photos, inducing the viewer to the spatial atmosphere of the environment defined for the collections." },
             NovasEspeciesDescription4: { label: "The collected units are arranged together at the exhibition, in a wall of the empty space. Separately, generated from a process of cloning the collected matter, three other species are inoculated; under the same mode of presentation, in another room." },
             NovasEspeciesDescription5: { label: "As main pillars of the exhibition, Novas Espécies is based on the creation and representation of compositions between living beings, in conjunction with the aesthetic resulting from the capacity of infinite and irreplicable variation of these processes. The artificial and the organic-natural, the theoretical scientific process and the creation of simulated materials, in contrast, and acting together." },
             NovasEspeciesDescription6: { label: "Emerson da Silva (1988, Porto Alegre) lives and works in Porto Alegre, Brazil." },
             ImaterialDescription1: { label: "Palácio presents Imaterial, the first individual exhibition of Andrés Stephanou. From May 05 to July 02 of 2017." },
             ImaterialDescription2: { label: "Exploring the dematerialization of the work of art as a field and concept, Imaterial is an exhibition condensed by digital files, into a single micro SD card. Materially impalpable, it's incorporated into space through electronic devices." },
             ImaterialDescription3: { label: "Existence and presence; a proposal of reflection on the perception of time and its passage. A sound installation and three projections compose the exhibition. In an orchestrated way, the works act centralized on a time scale, proposed as exhibition ground. In a cycle of 120 minutes, divided into two 60-minute stages, the projections presented suffer,  simultaneously, minute by minute, a process of solidification or dissolution of its visual composition - inverse every hour." },
             ImaterialDescription4: { label: "Composed with a bass, linear and constant frequencies, a sound scattered in all the space synthesizes the noise generated by the terrestrial atmospheric pressure - presented in conjunction with the projections and in individual rooms. Five bluetooth interconnected sound speakers are distributed on both floors, to unify and reverberate the exhibition in a linear system. In a quiet room, the sound is proposed through a headphone, for the spectator use, paired with the bluetooth of the installation. " },
             ImaterialDescription5: { label: "At the end of the full 120 minutes process, a 10-minute recess occurs on the exhibition - with both three spaces hosting the projections becoming entirely empty. During the interval, a distinct audio track is introduced: a minimal composition of sound remnants." },
             ImaterialDescription6: { label: "Acting within the proposed time-scale system, projected in the space, a thin line materializes or dematerialises its composition, in a process almost imperceptible to the spectator. Synchronized, in the first room of the exhibition, a blue strip proposes the same; both the projections with a malleable spatial format." },
             ImaterialDescription7: { label: "60 points of light are incorporated into space. Every minute, a random white dot appears or disappears - under reverse process every hour. Generated by algorithms, pre-programmed to do not repeat the combinatorial arrangement of points, the work has its own automation and, in a minimal way, operates to never be the same; every minute presents a unique visual composition. Incorporates life itself to the work, independent and self-managing of its process; constantly changing." },
             ImaterialDescription8: { label: "The time passage, in conjunction with the notion of presence in space, as central pillars for a fully digital construction and execution of Imaterial. Is introduced the dematerialization of the work of art, with all the exhibition synthesized by a single micro-card of digital files storage, under an automated system. The building becomes a capsule; immersed by the concept and composition of the exhibition. " },
             ImaterialDescription9: { label: "Andrés Stephanou (1993, Porto Alegre) lives and works in Porto Alegre, Brasil." }
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
