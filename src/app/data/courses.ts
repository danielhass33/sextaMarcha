export interface Course { id: string; title: string; hours?: number; audience: string; category: string; notes?: string; }
// Catálogo informativo extraído dos manuais recebidos. Preços e disponibilidade comercial pendentes de homologação.
export const courses: Course[] = [
 {id:'mopp',title:'MOPP — Produtos Perigosos',hours:50,audience:'Motoristas de cargas perigosas',category:'Especializados'},
 {id:'coletivo',title:'Transporte Coletivo',hours:50,audience:'Motoristas de ônibus e vans',category:'Especializados'},
 {id:'escolar',title:'Transporte Escolar',hours:50,audience:'Condutores de transporte escolar',category:'Especializados'},
 {id:'emergencia',title:'Transporte de Emergência',hours:50,audience:'Motoristas de ambulâncias e resgate',category:'Especializados'},
 {id:'indivisivel',title:'Cargas Indivisíveis',hours:50,audience:'Condutores de cargas especiais',category:'Especializados'},
 {id:'mototaxi',title:'Mototaxista',hours:30,audience:'Transporte de passageiros em moto',category:'Profissionais'},
 {id:'motofrete',title:'Motofretista',hours:30,audience:'Transporte de mercadorias em moto',category:'Profissionais'},
 {id:'reciclagem',title:'Reciclagem de Infratores',hours:45,audience:'Condutores sujeitos a reciclagem',category:'Reciclagem',notes:'Condições e procedimentos variam por estado'},
 {id:'preventiva',title:'Reciclagem Preventiva',audience:'Condutores profissionais elegíveis com EAR',category:'Reciclagem'},
 {id:'atualizacao',title:'Atualização de Especializados',audience:'Condutores já especializados',category:'Atualização'},
 {id:'taxista',title:'Formação de Taxista',hours:28,audience:'Taxistas; requisitos municipais variáveis',category:'Profissionais',notes:'28 horas-aula mais eventuais adicionais'},
 {id:'antt',title:'TAC e Responsável Técnico (ANTT)',hours:16,audience:'Transportadores autônomos e gestores',category:'Profissionais'}
];
