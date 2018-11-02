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
          send: { label: 'Enviar' },
          back: { label: 'voltar' },
          li1: { label: 'exibições', },
          li2: { label: 'sobre', },
          li3: { label: 'publicações', },
          li4: { label: 'eventos', },
          freeEvent: { label: 'Evento gratuito e aberto ao público.' },
          freeEventNoturno: { label: 'Sessão gratuita e aberta ao público.' },
          eventDate1: { label: '01 de setembro, 2018' },
          eventDay1: { label: 'Sábado, 16h' },
          eventDate2: { label: '06 de junho, 2018' },
          eventDay2: { label: 'Sábado, 19h' },
          eventDate3: { label: '28 de abril, 2018' },
          eventDay3: { label: 'Sábado, 19h' },
          event1: { label: 'Palácio realiza uma conversa com Lucas Alves Costa abordando a produção de sua primeira exibição solo, em dezembro na instituição.' },
          event2: { label: 'Palácio apresenta uma visita guiada com Emerson da Silva à exibição Terrestre, um dia após seu encerramento na instituição. Uma sessão comentada do filme Adaptação Reversa (2018) é realizada.' },
          event3: { label: 'Palácio apresenta uma sessão de exibição do filme Noturno (2018), comentada por Andrés Stephanou. Um evento extra após o término da exibição Potencial Evolutivo.' },
          publications: { label: 'Livros produzidos e publicados pela instituição' },
          soon: { label: 'em breve' },
          about: { label: 'Fundado em 2016, Palácio é uma instituição de arte localizada em um espaço centenário no Centro Histórico de Porto Alegre. Apresenta exibições individuais e eventos extras, com visitas realizadas sob agendamento prévio.' },
          address: { label: 'Porto Alegre, Brasil' },
          infos: { label: 'Contato:' },
          foundation: { label: "fundação da instituição" },
          foundationDate: { label: "26 de outubro, 2016" },
          dateTesting: { label: '15 de dezembro, 2018 – 03 de fevereiro 2019' },
          dateTerrestre: { label: '05 de maio – 05 de julho, 2018' },
          datePE: { label: '09 de março – 22 de abril, 2018' },
          dateNE: { label: '19 de agosto – 05 de outubro, 2017' },
          dateImaterial: { label: '05 de maio – 02 de julho, 2017' },
          dateGabriel19: { label: '05 de outubro – 03 de dezembro, 2019'},
          dateAlexandre19: { label: '03 de agosto – 20 de setembro, 2019' },
          dateAndres19: { label: '02 de março – 21 de abril, 2019' },
          dateEmerson19: { label: '11  de maio – 7 de julho, 2019' },
          dateLucas19: { label: '15 de dezembro, 2018 – 03 de fevereiro, 2019' }, 
          PEDescription: { label: 'Palácio apresenta Potencial Evolutivo, uma exibição de Andrés Stephanou.' },
          PEDescription2: { label: "Manufaturada digitalmente e industrialmente, sob tonalidade metafórica, a exibição é composta por um conjunto híbrido de obras; de diálogo conceitual circular. O imaterial em contraste ao material, o digital em contraste à matérias-primas sintéticas." }, 
          PEDescription3: { label: "Recortes iconográficos do presente de cenários que deixarão de existir no futuro. Em Noturno (2018), filme de curta-metragem (16 min), explora-se postos de combustíveis funcionando durante a transitória de uma única madrugada. Com a previsão da extinção do uso de combustão fóssil em automóveis nas próximas décadas, em uma visão futurista, como consequência, tais postos de combustíveis e automotores se tornarão obsoletos em presença — com sua atual configuração. Filmado em 4K, sob uma proposta visual e sonora de estética terrestre-espacial, cria-se como motriz central do filme um cenário poético e de relação entre a obsolescência programada de postos de combustíveis fósseis e um carro dependente dos mesmos." },
          PEDescription4: { label: "Impalpável, na primeira sala da instituição, uma linha fina é projetada no espaço. Construída digitalmente com algoritmos, executa um processo de 60 segundos, em um movimento de sentido horário contínuo. Um paralelo entre a dimensão visual gerada pela obra e sua presença no espaço, em conjunto à noção de passagem do tempo e sua equivalência. " },
          PEDescription5: { label: "Fixada na parede, instrumentaliza-se uma placa de fibra de carbono como emblema visual de um futuro próximo. Matéria-prima sintética de alta performance, tende-se o uso abundante em diversos cenários nas próximas décadas — devido a sua versatilidade (rigidez e leveza). Desconstruindo os papéis funcionais, evidencia-se o estético-visual puro da matéria e a influência presencial abstrata gerada quando uma amostra de fibra de carbono é disposta livre, fora de seu campo de atuação. Em um ambiente de proposta contemplativa, exclusa de ação externa." },
          PEDescription6: { label: "Uma instalação proposta a partir de uma faixa de áudio de longa duração, é apresentada por um pequeno dispositivo sonoro, em um espaço sob iluminação azul. Com uma estética mínima, composta por pulsações de timbres graves em sequência, é empregada ao espectador, de modo introspectivo, como trilha do tempo presente: denso e intenso, com ares futurísticos." },
          PEDescription7: { label: "Em um espaço exibitivo vazio, uma faixa adesiva fluorescente é incorporada. Matéria-prima sintética conspícua, é comumente empregada em sinalizações — por ser refletiva e fluorescente, gera visibilidade noturna e diurna. Como proposta da obra, o espectador é induzido automaticamente, devido a fluorescência sintética da cor, a concentrar toda energia da sala na presença do material; mesmo que existente de forma mínima no ambiente." },
           PEDescription8: { label: "Andrés Stephanou (1993, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." },
          duration: { label: "duração 16''05'" },
          PEpdf: { label: "Andres Stephanou - Potencial Evolutivo 2018 PT" },
          NEpdf: { label: "Emerson da Silva - Novas Especies 2017 PT" },
          Imaterialpdf: { label: "Andres Stephanou - Imaterial 2017 PT" },
          Terrestrepdf: { label: "Emerson da Silva  - Terrestre 2018 PT" },
          download: { label: "Download PDF (PT)" },
          moreInfo: { label: "contato@palacio.xyz" },
          TerrestreDescription1: { label: "Palácio apresenta Terrestre, uma exibição de Emerson da Silva. Um filme e duas instalações são apresentados durante o período de dois meses."},
          TerrestreDescription2: { label: "Em Adaptação Reversa (2018), filme de longa metragem, a plasticidade resultante da relação, positiva ou negativa, entre o homem e o meio em que habita é explorada. Casos materializados dessa interação são documentados: a conversão da força do vento em energia eólica útil — através de aerogeradores — e o soterramento de construções em áreas de dunas — causado pela ação do curso natural do vento. Registra-se processos de ação e reação da natureza em contrapartida à intervenções humanas."},
          TerrestreDescription3: { label: "Na primeira sala da instituição, uma instalação composta por metal, terra e grama propõe a contemplação de uma amostra de solo da Terra. Adaptada ao formato imposto pela estrutura da obra, sob as condições do espaço em que foi instalada, a grama teve seu ciclo de vida observado durante os dois meses em que foi exibida. Desde o momento de sua extração da superfície terrestre, à seu completo sucumbimento por falta de nutrientes." },
          TerrestreDescription4: { label: "Em um círculo de relação, instalada na parede de uma das salas, é introduzido um paralelo entre o ciclo de desenvolvimento natural de um vegetal e a criação de um pequeno ecossistema. Sementes germinadas em terra preta são apresentadas como amostragem de material terrestre vivo. Em constante processo, seu curso de vida é observado pelo espectador, desde o nascimento." },
          TerrestreDescription5: { label: "Diariamente, as instalações apresentadas sofrem mutação devido ao seu processo natural, estabelecido através dos formatos de apresentação e as condições dispostas nos espaços da instituição. Sob uma abordagem científica e poética, Terrestre resulta  em uma exibição de constante e mínima mudança visual, constituída em sua essência, por matéria-prima viva — de inter-relação conceitual direta entre as obras."},
          TerrestreDescription6: { label: "Emerson da Silva (1988, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." },
          NovasEspeciesDescription1: { label: "Palácio apresenta Novas Espécies, primeira exibição individual de Emerson da Silva." },
          NovasEspeciesDescription2: { label: "O artificial e a criação de simulações materiais; o orgânico-natural e o uso de processos científicos. Como pilares da exibição, Novas Espécies baseia-se na criação e representação de composições entre seres, em conjunto à estética resultante da capacidade de variação infinita e irreplicável desses processos." },  
          NovasEspeciesDescription3: { label: "Duas composições em salas distintas, constituídas de modo aleatório em sua disposição de elementos, introduzem à representações de ecossistemas terrestres. Uma junção fluída de matérias-primas que dividem um mesmo espaço, replicando a interação natural e equilibrada que ocorre em recortes da natureza: a ocupação de um mesmo terreno por várias espécies, de modo harmônico e interativo. Bloco de cimento, tela de aço e acrílico, sobre tecido branco, em conjunto à dispositivos de luz, compõem as obras em ambientação escura, sob luz negra." },
          NovasEspeciesDescription4: { label: "Em um local selecionado, três placas de Petri são dispostas no solo para uma coleta de amostras de matéria microbiota proveniente do ambiente. Durante o tempo de exibição, resulta-se na criação de um conjunto de espécies provenientes de um local específico, formados através de uma equação de seleção natural microbiota única — de replicagem inconcebível. O processo é documentado e apresentado em três fotos, induzindo o espectador à atmosfera espacial do ambiente definido para as coletas." },
          NovasEspeciesDescription5: { label: "As unidades coletadas são dispostas em conjunto na exibição, em uma parede do espaço vazio. Sob o mesmo modo de apresentação, em outra sala, a partir de um processo de clonagem da matéria coletada, outras três espécies são inoculadas." },
          NovasEspeciesDescription6: { label: "Emerson da Silva (1988, Porto Alegre) vive e trabalha em Porto Alegre." },
          ImaterialDescription1: { label: "Palácio apresenta Imaterial, primeira exibição individual de Andrés Stephanou. " },
          ImaterialDescription2: { label: "A desmaterialização através da digitalização; algoritmos como matéria-prima. Imaterial é uma exibição condensada em um único cartão micro SD — materialmente impalpável, arquivos digitais são incorporados ao espaço por dispositivos eletrônicos." },
          ImaterialDescription3: { label: "Três projeções compõem a exibição. De modo orquestrado, atuam sob uma escala de tempo: um ciclo de 120 minutos, dividido em dois estágios de 60 minutos. As três projeções executam simultaneamente, minuto a minuto, um processo de solidificação de sua composição visual, seguido de um processo de dissolução na hora seguinte." },
          ImaterialDescription4: { label: "Inclusa no sistema de escala de tempo proposto, projetada no espaço, uma linha fina de luz materializa e em sequência desmaterializa sua composição; continuamente — — cada processo tem a duração de 60 minutos, quase imperceptíveis ao espectador. Na primeira sala da exibição, uma faixa de luz azul propõe o mesmo conceito, em sincronia temporal." },
          ImaterialDescription5: { label: "60 pontos de luz são incorporados ao espaço no decorrer de 60 minutos. A cada minuto, aleatoriamente, um ponto branco emerge — na hora seguinte, o processo se torna inverso: pontos de luz esmaecem um a um, minuto a minuto. Gerada por algoritmos, pré-programada para que não haja repetição na disposição de pontos, a obra opera para nunca ser a mesma — a cada minuto apresentar um estado visual único; independente e autogestora de seu processo." },
          ImaterialDescription6: { label: "A noção de presença no espaço; o silêncio e a luz; a passagem do tempo e sua equivalência — eixos para uma construção e apresentação totalmente digital de Imaterial. Introduze-se à desmaterialização da obra de arte, com toda exibição sintetizada por um micro cartão de armazenamento de arquivos digitais." },
          ImaterialDescription7: { label: "Andrés Stephanou (1993, Porto Alegre) vive e trabalha em Porto Alegre, Brasil." },
          ImaterialDescription8: { label: "" },
          ImaterialDescription9: { label: "" }

        },
      },
      en: {
        translation: {
          send: { label: 'Send' },
          back: { label: 'back' },
          li1: { label: 'exhibitions', },
          li2: { label: 'about', },
          li3: { label: 'publications', },
          li4: { label: 'events', },
          freeEvent: { label: 'Open and free event to the public.' },
          freeEventNoturno: { label: 'Open and free session to the public.' },
          eventDate1: { label: 'September 01, 2018' },
          eventDay1: { label: 'Saturday, 4pm' },
          eventDate2: { label: 'June 06, 2018' },
          eventDay2: { label: 'Saturday, 7pm' },
          eventDate3: { label: 'April 28, 2018' },
          eventDay3: { label: 'Saturday, 7pm' },
          event1: { label: 'Palácio presents a conversation with Lucas Alves Costa in an approach to the production of his first solo exhibition, in December at the institution.' },
          event2: { label: 'Palácio presents a guided tour with Emerson da Silva to the exhibition Terrestre, one day after its closure in the institution. An commented session of the film Adaptação Reversa (2018) is displayed.' },
          event3: { label: 'Palácio presents a screening session of the film Noturno (2018), commented by Andrés Stephanou. An extra event after the end of the exhibition Potencial Evolutivo.' },
          publications: { label: 'Books produced and published  by the institution' },
          soon: { label: 'coming soon' },
          about: { label: 'Founded in 2016, Palácio is an art institution located in a centennial place in Historical Center of Porto Alegre. Presenting individual exhibitions and extra events, with visits made under previous scheduling.' },
          address: { label: 'Porto Alegre, Brazil' },
          infos: { label: 'Contact:' },
          foundation: { label: "foundation of the institution" },
          foundationDate: { label: "October 26, 2016" },
          dateTesting: { label: 'December 15, 2018 – February 03, 2019' },
          dateTerrestre: { label: 'May 5 – June 5, 2018' },
          datePE: { label: 'March 9 – April 22, 2018' },
          dateNE: { label: 'August 19 – October 5, 2017'},
          dateImaterial: { label: 'May 5 – June 2, 2017' },
          dateGabriel19: { label: 'October 05 –  December 03, 2019'},
          dateAlexandre19: { label: 'August 03 – September 20, 2019' },
          dateAndres19: { label: 'March 02 – April 21, 2019' },
          dateEmerson19: { label: 'May 11 – July 7, 2019' },
          dateLucas19: { label: 'December 15, 2018 – February 03, 2019' },
          PEDescription: { label: "Palácio presents Potencial Evolutivo, an exhibition of Andrés Stephanou." },
          PEDescription2: { label: "Manufactured digitally and industrially, under a metaphorical tonality, the exhibition is composed by a hybrid set of works; with a circular conceptual dialogue. The digital in contrast to synthetic raw materials, the immaterial in contrast to the material." },
          PEDescription3: { label: "Present time iconographic clippings of scenarios that won't exist in the future. Noturno (2018), a short length film (16 min), explores gas stations operating during a single night. In a futuristic vision, with the expected extinction of fossil fuel use in cars, as a consequence, such gas stations and automobiles will become obsolete in presence — with its current configuration. Filmed in 4K, under a visual and sounding proposal of terrestrial-spatial aesthetic, it's created as the central point of the film a poetic and relational scenery between the programmed obsolescence of fossil fuel stations and a car-dependent on them." },
          PEDescription4: { label: "Impalpable, in the first room of the institution, a thin line is projected into space. Digitally built with algorithms, in a constant clockwise direction movement executes a 60-second process. A parallel between the visual dimension proposed by the work and its presence in space, with the notion of the passage of time and its equivalence." },
          PEDescription5: { label: "Attached to the wall, a carbon fiber plate is instrumentalized as a visual emblem from a near future. As a high-performance synthetic raw material, the abundant use is foreseen in several scenarios in the next decades — due to its versatility (rigidity and lightness). Deconstructing the functional roles, is evidenced the pure visual-aesthetic of the material and the influence of the abstract presence generated when a sample of carbon fiber is freely disposed, out of its field of use. In an environment of a contemplative proposal, excluded from the external action." },
          PEDescription6: { label: "An installation proposed from a long duration audio track is presented by a small sound speaker, in a space under blue lighting. With a minimal aesthetic, composed with a bass pulsing in a long-sequence, acts to the viewer as a soundtrack of the present time: dense and intense, with a futuristic semblance." },
          PEDescription7: { label: "In an empty exhibition space, a fluorescent adhesive strip is incorporated. A conspicuous synthetic raw material, commonly used in signaling — for being reflective and fluorescent, generates both nocturnal and diurnal visibility. As a proposal of the work, the viewer is automatically induced, due to synthetic fluorescence of color, to concentrate all energy of the room in the presence of the material; even if it exists in a minimal way  in the environment." },
        
          PEDescription8: { label: "Andrés Stephanou (1993, Porto Alegre) lives and works in Porto Alegre, Brazil." },
          duration: { label: "duration 16''05'" },
          PEpdf: { label: "Andres Stephanou - Potencial Evolutivo 2018 EN" },
          NEpdf: { label: "Emerson da Silva - Novas Especies 2017 EN" },
          Terrestrepdf: { label: "Emerson da Silva - Terrestre 2018 EN" },
          Imaterialpdf: { label: "Andres Stephanou - Imaterial 2017 EN" },
          download: { label: "Download PDF (EN)" },
          moreInfo: { label: "contato@palacio.xyz" },
          TerrestreDescription1: { label: "Palácio presents Terrestre, an exhibition of Emerson da Silva. A film and two installations are presented during a period of two months." },
          TerrestreDescription2: { label: "The feature-lenght film Adaptação Reversa (2018), explores the plasticity resulting from the relationship, positive or negative, between the human and the environment in which he lives. Cases of this interaction are documented: the conversion of wind power into useful wind energy — through wind turbines — and the immersion of human constructions in dune areas — caused by the natural course of the wind action. Processes of action and reaction by nature in contrast to human interventions are recorded." },
          TerrestreDescription3: { label: "In the first room of the institution, an installation composed of metal, soil, and grass proposes the contemplation of a ground sample of the Earth. Adapted to the format imposed by the structure of the work, under the conditions of the space in which it was installed, the grass had its life cycle observed during the two months it was exhibited. Since the moment of its extraction from the Earth's surface, to its complete succumbing for lack of nutrients." },
          TerrestreDescription4: { label: "Installed in the wall of one of the rooms, in a relationship circle, a parallel is introduced between the cycle of natural development of a vegetable and a small ecosystem creation. Seeds germinated in the black soil are presented as a sampling of live terrestrial material. In a constant process, its life course is observed by the viewer, since the birth." },
          TerrestreDescription5: { label: "On a daily basis, the works presented mutate due to its natural process, established through the formats of presentation of the installations and the conditions arranged in the spaces of the institution. Under a scientific and poetic approach, Terrestre results in an exhibition of constant and minimal visual change, constituted in its essence by living raw material — of direct conceptual interrelation between the works." },
          TerrestreDescription6: { label: "Emerson da Silva (1988, Porto Alegre) lives and works in Porto Alegre, Brazil."},
          NovasEspeciesDescription1: { label: "Palácio presents Novas Espécies, the first individual exhibition of Emerson da Silva." },
          NovasEspeciesDescription2: { label: "The artificial and the creation of material simulations; the organic-natural and the use of scientific processes. As main pillars of the exhibition, Novas Espécies is based on the creation and representation of compositions between living beings, jointly with the aesthetic resulting from the capacity of infinite and irreplicable variation of these processes. "},
          NovasEspeciesDescription3: { label: "Two compositions in separate rooms, randomly constituted in their arrangement of elements, introduce to representations of terrestrial ecosystems. A fluid junction of raw materials that divide the same space, replicating the natural and balanced interaction that occurs in clippings of nature: the occupation of the same land by several species, in a harmonic and interactive way. Cement block, steel screen, and acrylic, on a white textile, with light devices, compose the works in a dark room, under black light." },
          NovasEspeciesDescription4: { label: "At a selected site, three Petri dishes are arranged in the soil for a samples collect of microbiota material from the environment. During the time of the exhibition, it's created a set of species from a specific location, which is formed through a unique microbiota natural selection equation — of inconceivable replication. The process is documented and presented in three photos, inducing the viewer to the spatial atmosphere of the environment defined for the collections." },
          NovasEspeciesDescription5: { label: "The collected units are disposed together at the exhibition, in a wall of the empty space. Under the same mode of presentation, in another room, generated from a process of cloning the collected matter, three other species are inoculated. " },
   
          NovasEspeciesDescription6: { label: "Emerson da Silva (1988, Porto Alegre) lives and works in Porto Alegre, Brazil." },
          ImaterialDescription1: { label: "Palácio presents Imaterial, the first individual exhibition of Andrés Stephanou." },
          ImaterialDescription2: { label: " The dematerialization thought the digitalization; algorithms as raw material. Imaterial is an exhibition condensed into a single micro SD card — materially impalpable, digital files are incorporated into space by electronic devices." },
          ImaterialDescription3: { label: " Three projections compose the exhibition. In an orchestrated way, act centralized under a time scale: a cycle of 120 minutes, divided into two 60-minute stages. The projections perform, simultaneously, minute by minute, a process of solidification of its visual composition, followed by a dissolution process in the next hour. " },
          ImaterialDescription4: { label: "Acting within the proposed time-scale system, projected in the space, a thin line of light materializes and in sequence dematerializes its composition; continuously — each process lasts 60 minutes, almost imperceptible to the viewer. In the first room of the exhibition, a blue strip light proposes the same concept, in a temporal synchrony. " },
          ImaterialDescription5: { label: "60 points of light are incorporated into the space within 60 minutes. Every minute, randomly, a white dot appears  — under reverse process in the next hour: light points fade one by one, minute by minute. Generated by algorithms, pre-programmed to do not repeat the arrangement of points, the work operates to never be the same — every minute presents a unique visual composition; independent and self-managing of its process." },
          ImaterialDescription6: { label: "The notion of presence in space; the silence and the light; the time passage and its equivalence — axes for a fully digital construction and execution of Imaterial. Is introduced the dematerialization of the work of art, with all the exhibition synthesized by a single micro-card of digital files storage." },
          ImaterialDescription7: { label: "Andrés Stephanou (1993, Porto Alegre) lives and works in Porto Alegre, Brazil." },
          ImaterialDescription8: { label: "" },
          ImaterialDescription9: { label: " " }

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
