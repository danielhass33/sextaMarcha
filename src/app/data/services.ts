export interface ServiceItem {
    slug: string; number: string; title: string; tagline: string; description: string;
    audience: string[]; status: 'initial' | 'planned'; videoUrl?: string; screenshots: string[];
}
export const services: ServiceItem[] = [
    { slug: 'educacao-de-transito', number: '01', title: 'Educação de trânsito', tagline: 'Conhecimento que gera oportunidades.', description: 'Indique cursos de trânsito aos seus clientes. A participação comercial dependerá das condições acordadas com a operação.', audience: ['Despachantes', 'Lojistas', 'Vistoriadores', 'Outros profissionais'], status: 'initial', screenshots: [] },
    { slug: 'vistorias-digitais', number: '02', title: 'Vistorias digitais', tagline: 'Tecnologia para a rotina de vistorias.', description: 'Soluções digitais voltadas à operação de vistoria automotiva. Módulo em planejamento.', audience: ['Vistoriadores', 'Despachantes'], status: 'planned', screenshots: [] },
    { slug: 'servicos-documentais', number: '03', title: 'Serviços documentais', tagline: 'Mais organização para o seu atendimento.', description: 'Ferramentas de apoio aos serviços documentais automotivos. Módulo em planejamento.', audience: ['Despachantes'], status: 'planned', screenshots: [] },
    { slug: 'solucoes-para-lojistas', number: '04', title: 'Soluções para lojistas', tagline: 'Novas possibilidades para vender e atender.', description: 'Soluções comerciais para profissionais de lojas de veículos. Módulo em planejamento.', audience: ['Lojistas'], status: 'planned', screenshots: [] }
];
