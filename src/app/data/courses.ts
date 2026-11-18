export interface Course {
  id: string;
  title: string;
  hours?: number;
  audience: string;
  category: string;
  notes?: string;
  description: string;
  image: string;
  benefits: string[];
  requirements: string[];
  offers: string[];
}

const img = (name: string) => `images/courses/${name}.webp`;

export const courses: Course[] = [
  {
    id: "mopp",
    title: "MOPP — Produtos Perigosos",
    hours: 50,
    audience: "Condutores de veículos que transportam produtos perigosos",
    category: "Especializados",
    description:
      "Formação especializada para profissionais que atuam no transporte de produtos perigosos, com foco em prevenção, legislação e segurança operacional.",
    image: img("mopp"),
    benefits: [
      "Conhecimentos específicos para transporte de produtos perigosos",
      "Orientações de prevenção e resposta a emergências",
      "Preparação para atuação profissional conforme requisitos aplicáveis",
    ],
    requirements: [
      "Verificar habilitação e requisitos legais aplicáveis",
      "Confirmar modalidade e disponibilidade com a instituição",
    ],
    offers: [],
  },
  {
    id: "coletivo",
    title: "Transporte Coletivo de Passageiros",
    hours: 50,
    audience:
      "Motoristas de ônibus, micro-ônibus e veículos de transporte coletivo",
    category: "Especializados",
    description:
      "Capacitação voltada à condução profissional de passageiros, abordando segurança, responsabilidade e atendimento no transporte coletivo.",
    image: img("coletivo"),
    benefits: [
      "Direção segura no transporte de passageiros",
      "Responsabilidade e atendimento aos usuários",
      "Conhecimentos específicos da atividade",
    ],
    requirements: ["Verificar categoria da CNH e demais requisitos legais"],
    offers: [],
  },
  {
    id: "escolar",
    title: "Transporte Escolar",
    hours: 50,
    audience: "Condutores de veículos de transporte escolar",
    category: "Especializados",
    description:
      "Formação direcionada à segurança no transporte de estudantes, com atenção às responsabilidades do condutor e aos procedimentos preventivos.",
    image: img("escolar"),
    benefits: [
      "Segurança no transporte de estudantes",
      "Boas práticas de embarque e desembarque",
      "Conhecimentos específicos da atividade",
    ],
    requirements: ["Verificar CNH, idade e demais requisitos aplicáveis"],
    offers: [],
  },
  {
    id: "emergencia",
    title: "Transporte de Emergência",
    hours: 50,
    audience: "Condutores de ambulâncias e veículos de emergência",
    category: "Especializados",
    description:
      "Capacitação para condução responsável de veículos de emergência, com foco em direção defensiva, segurança e procedimentos operacionais.",
    image: img("emergencia"),
    benefits: [
      "Condução segura em situações de emergência",
      "Prevenção de riscos",
      "Responsabilidade operacional",
    ],
    requirements: [
      "Verificar habilitação e condições exigidas para a atividade",
    ],
    offers: [],
  },
  {
    id: "indivisivel",
    title: "Transporte de Cargas Indivisíveis",
    hours: 50,
    audience: "Condutores de veículos que transportam cargas especiais",
    category: "Especializados",
    description:
      "Formação para profissionais envolvidos no transporte de cargas indivisíveis, considerando planejamento, legislação e segurança.",
    image: img("indivisivel"),
    benefits: [
      "Conhecimentos sobre cargas especiais",
      "Planejamento e prevenção de riscos",
      "Segurança no transporte",
    ],
    requirements: ["Verificar habilitação e exigências legais específicas"],
    offers: [],
  },
  {
    id: "mototaxi",
    title: "Formação de Mototaxista",
    hours: 30,
    audience: "Profissionais que transportam passageiros em motocicletas",
    category: "Profissionais",
    description:
      "Capacitação voltada à atividade de mototáxi, com orientações sobre condução segura, atendimento e responsabilidade profissional.",
    image: img("mototaxi"),
    benefits: [
      "Segurança no transporte de passageiros",
      "Atendimento profissional",
      "Prevenção de acidentes",
    ],
    requirements: [
      "Verificar requisitos de habilitação e regulamentação local",
    ],
    offers: [],
  },
  {
    id: "motofrete",
    title: "Formação de Motofretista",
    hours: 30,
    audience: "Profissionais que transportam mercadorias em motocicletas",
    category: "Profissionais",
    description:
      "Capacitação para atuação no transporte de mercadorias por motocicleta, com foco em direção preventiva e boas práticas profissionais.",
    image: img("motofrete"),
    benefits: [
      "Segurança no transporte de mercadorias",
      "Prevenção de acidentes",
      "Responsabilidade profissional",
    ],
    requirements: ["Verificar habilitação e regulamentação aplicável"],
    offers: [],
  },
  {
    id: "reciclagem",
    title: "Reciclagem para Condutores Infratores",
    hours: 45,
    audience: "Condutores sujeitos a curso de reciclagem",
    category: "Reciclagem",
    description:
      "Curso destinado a condutores que precisam cumprir exigências de reciclagem, conforme as regras e procedimentos aplicáveis ao seu caso.",
    image: img("reciclagem"),
    benefits: [
      "Conteúdo de educação e segurança no trânsito",
      "Orientação sobre o processo de reciclagem",
      "Acompanhamento do pedido pela plataforma",
    ],
    requirements: [
      "Confirmar o estado e a elegibilidade do condutor",
      "Verificar exigências do órgão de trânsito competente",
    ],
    notes: "Condições, aceitação e procedimentos variam por estado.",
    offers: ["118sc-icetran"],
  },
  {
    id: "preventiva",
    title: "Reciclagem Preventiva",
    audience: "Condutores profissionais elegíveis com EAR",
    category: "Reciclagem",
    description:
      "Modalidade preventiva destinada aos condutores que atendam aos critérios legais aplicáveis.",
    image: img("preventiva"),
    benefits: [
      "Educação preventiva no trânsito",
      "Atualização de conhecimentos",
      "Orientação sobre elegibilidade",
    ],
    requirements: ["Confirmar EAR e demais condições legais vigentes"],
    offers: [],
  },
  {
    id: "atualizacao",
    title: "Atualização de Cursos Especializados",
    audience: "Condutores que já possuem formação especializada",
    category: "Atualização",
    description:
      "Atualização de conhecimentos para profissionais que precisam manter sua formação especializada conforme as exigências aplicáveis.",
    image: img("atualizacao"),
    benefits: [
      "Revisão de conteúdos especializados",
      "Atualização de práticas de segurança",
      "Continuidade da qualificação profissional",
    ],
    requirements: [
      "Informar a especialização anterior",
      "Confirmar a modalidade de atualização necessária",
    ],
    offers: [],
  },
  {
    id: "taxista",
    title: "Formação de Taxista",
    hours: 28,
    audience: "Profissionais que atuam no transporte individual de passageiros",
    category: "Profissionais",
    description:
      "Capacitação voltada ao atendimento, segurança e responsabilidade no transporte individual de passageiros.",
    image: img("taxista"),
    benefits: [
      "Atendimento e relacionamento com passageiros",
      "Direção segura",
      "Conhecimentos para a atividade profissional",
    ],
    requirements: ["Confirmar exigências do município de atuação"],
    notes: "28 horas-aula mais eventuais conteúdos adicionais.",
    offers: [],
  },
  {
    id: "antt",
    title: "TAC e Responsável Técnico — ANTT",
    hours: 16,
    audience: "Transportadores autônomos e responsáveis técnicos",
    category: "Profissionais",
    description:
      "Capacitação voltada aos conhecimentos necessários para atividades de transporte rodoviário de cargas e gestão responsável.",
    image: img("antt"),
    benefits: [
      "Conhecimentos sobre transporte rodoviário de cargas",
      "Responsabilidade na operação",
      "Orientações sobre requisitos regulatórios",
    ],
    requirements: ["Confirmar enquadramento e exigências da atividade"],
    offers: [],
  },
];

export const findCourse = (id: string) =>
  courses.find((course) => course.id === id);
