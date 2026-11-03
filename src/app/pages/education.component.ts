import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { courses } from '../data/courses';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="education-page">
      <section class="edu-hero">
        <div class="hero-art" aria-hidden="true"><span class="hero-number">06</span><span class="hero-track"></span></div>
        <div class="wrap hero-content">
          <div class="eyebrow">SEXTA MARCHA / EDUCAÇÃO NO TRÂNSITO <span class="orange-dot">●</span></div>
          <div class="hero-tag">UMA NOVA FRENTE PARA O SEU NEGÓCIO</div>
          <h1>SEU BALCÃO.<br>MAIS <em>SOLUÇÕES.</em><br>MAIS NEGÓCIOS<span class="orange">.</span></h1>
          <p>Seu cliente precisa de um curso de trânsito? Agora você pode oferecer essa solução no próprio atendimento. A Sexta Marcha reúne o catálogo, organiza a venda e acompanha suas comissões em uma única plataforma.</p>
          <div class="hero-actions">
            <a routerLink="/cadastro-despachante" class="primary-action">QUERO SER PARCEIRO <span>↗</span></a>
            <a href="#como-funciona" class="outline-action">ENTENDA COMO FUNCIONA <span>↓</span></a>
          </div>
          <div class="hero-foot">PARA DESPACHANTES E PARCEIROS COMERCIAIS <span>—</span> UMA SOLUÇÃO SEXTA MARCHA</div>
        </div>
      </section>

      <section class="strip">
        <div class="wrap strip-grid">
          <div><b>01</b><span>CATÁLOGO DE CURSOS<br>EM UM SÓ LUGAR</span></div>
          <div><b>02</b><span>VENDAS VINCULADAS<br>AO SEU CADASTRO</span></div>
          <div><b>03</b><span>COMISSÕES E REPASSES<br>COM ACOMPANHAMENTO</span></div>
        </div>
      </section>

      <section class="section-dark" id="como-funciona">
        <div class="wrap">
          <div class="section-label">01 / COMO FUNCIONA</div>
          <div class="section-head">
            <h2>DO ATENDIMENTO<br>À <em>VENDA.</em></h2>
            <div class="section-description"><p>Você continua atendendo seu cliente normalmente. Quando ele precisar de um curso, faz a operação pelo portal da Sexta Marcha — com o seu cadastro de parceiro.</p><p class="muted">O fluxo abaixo é o modelo comercial previsto para a plataforma. Pagamentos e matrículas serão habilitados após as integrações.</p></div>
          </div>
          <div class="process-grid">
            <article class="process-card"><span class="process-index">01 / IDENTIFIQUE</span><div class="process-icon">◎</div><h3>ENTENDA A NECESSIDADE</h3><p>O cliente procura seu escritório para resolver uma demanda de trânsito. Você identifica qual curso ele precisa e confere os requisitos.</p></article>
            <article class="process-card"><span class="process-index">02 / ACESSE</span><div class="process-icon">↗</div><h3>ENTRE NA SEXTA MARCHA</h3><p>Faça login no portal do despachante, consulte o catálogo e escolha o curso adequado para o cliente.</p></article>
            <article class="process-card"><span class="process-index">03 / CADASTRE</span><div class="process-icon">＋</div><h3>REGISTRE O ALUNO</h3><p>Preencha os dados necessários, revise as informações e gere o pedido de venda vinculado ao seu estabelecimento.</p></article>
            <article class="process-card"><span class="process-index">04 / RECEBA</span><div class="process-icon">✓</div><h3>CONFIRME O PAGAMENTO</h3><p>O cliente paga pelo checkout da Sexta Marcha. Após a confirmação, a venda fica registrada e segue para a matrícula.</p></article>
            <article class="process-card"><span class="process-index">05 / ACOMPANHE</span><div class="process-icon">◷</div><h3>ACOMPANHE O CURSO</h3><p>Consulte o status do pedido e da matrícula no painel, conforme a integração educacional estiver disponível.</p></article>
            <article class="process-card accent-card"><span class="process-index">06 / COMISSÃO</span><div class="process-icon">↗</div><h3>GANHE PELA VENDA</h3><p>Sua comissão é calculada sobre as vendas elegíveis. Os repasses estão planejados para acontecer semanalmente.</p></article>
          </div>
        </div>
      </section>

      <section class="catalog-section" id="catalogo">
        <div class="wrap">
          <div class="section-label">02 / PORTFÓLIO DE EDUCAÇÃO</div>
          <div class="section-head catalog-head"><h2>UM CATÁLOGO.<br><em>VÁRIAS OPORTUNIDADES.</em></h2><p>Encontre opções para diferentes necessidades do seu cliente. Antes de ofertar, confirme as exigências, a disponibilidade e as regras aplicáveis ao estado.</p></div>
          <div class="filters" aria-label="Filtrar cursos">
            @for (filter of categories; track filter) {
              <button type="button" [class.active]="selectedCategory() === filter" (click)="selectedCategory.set(filter)">{{ filter === 'Todos' ? 'TODOS OS CURSOS' : filter.toUpperCase() }}</button>
            }
          </div>
          <div class="course-grid">
            @for (course of visibleCourses(); track course.id) {
              <article class="course-card">
                <div class="course-media" [style.background-image]="'linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.55)), url(' + imageFor(course.id) + ')'">
                  <span class="course-category">{{ course.category }}</span>
                  <span class="media-label">SEXTA MARCHA / EDUCAÇÃO</span>
                </div>
                <div class="course-body">
                  <div class="course-meta"><span>{{ course.hours ? course.hours + ' HORAS-AULA' : 'CARGA HORÁRIA A CONFIRMAR' }}</span><span>↗</span></div>
                  <h3>{{ course.title }}</h3>
                  <p>{{ course.audience }}</p>
                  @if (course.notes) { <div class="course-note">{{ course.notes }}</div> }
                  <a routerLink="/portal" class="course-link">ACESSAR PORTAL PARA OFERTAR <span>↗</span></a>
                </div>
              </article>
            }
          </div>
          <p class="catalog-disclaimer">Catálogo informativo. A oferta depende da elegibilidade do aluno, das regras de cada estado e da homologação comercial e operacional. Fotos ilustrativas a serem adicionadas.</p>
        </div>
      </section>

      <section class="business-section" id="comissoes">
        <div class="wrap business-grid">
          <div>
            <div class="section-label">03 / SUA OPERAÇÃO EM UM SÓ LUGAR</div>
            <h2>VOCÊ VENDE.<br><em>A GENTE ORGANIZA.</em></h2>
            <p>Mais do que disponibilizar cursos, a Sexta Marcha está sendo preparada para dar visibilidade ao desempenho comercial de cada parceiro.</p>
            <a routerLink="/cadastro-despachante" class="primary-action">CONHECER O PORTAL <span>↗</span></a>
          </div>
          <div class="dashboard-preview" aria-label="Prévia ilustrativa do painel comercial">
            <div class="preview-header"><span>SEXTA MARCHA / MEU PAINEL</span><span class="preview-pill">PRÉVIA</span></div>
            <div class="preview-title">SUAS VENDAS, EM DETALHES.</div>
            <div class="preview-tiles"><div><small>CURSOS VENDIDOS</small><b>—</b></div><div><small>COMISSÕES</small><b>R$ —</b></div></div>
            <div class="preview-row"><span>Vendas por curso</span><span>↗</span></div>
            <div class="preview-row"><span>Histórico de clientes e pedidos</span><span>↗</span></div>
            <div class="preview-row"><span>Repasse semanal</span><span>↗</span></div>
            <div class="preview-footer">INDICADORES REAIS APÓS A ATIVAÇÃO DO SISTEMA</div>
          </div>
        </div>
      </section>

      <section class="faq-section">
        <div class="wrap faq-grid">
          <div><div class="section-label">04 / DÚVIDAS FREQUENTES</div><h2>SEM<br><em>COMPLICAÇÃO.</em></h2></div>
          <div class="faq-list">
            <details><summary>Preciso ter uma plataforma de cursos própria?<span>＋</span></summary><p>Não. A proposta é centralizar o catálogo e a operação comercial no portal da Sexta Marcha. O acesso do aluno ao conteúdo seguirá o processo de matrícula definido para cada curso.</p></details>
            <details><summary>Quem recebe o pagamento do cliente?<span>＋</span></summary><p>No modelo previsto, o pagamento será processado em nome da operação Sexta Marcha, por um checkout integrado. A cobrança ainda depende de implementação e homologação.</p></details>
            <details><summary>Como recebo minha comissão?<span>＋</span></summary><p>O sistema calculará as comissões das vendas elegíveis e organizará repasses automáticos semanais, após a liquidação e as verificações financeiras.</p></details>
            <details><summary>Posso vender qualquer curso para qualquer cliente?<span>＋</span></summary><p>Não. Cada curso possui requisitos próprios e pode depender de procedimentos e regras estaduais. O despachante deverá verificar a elegibilidade antes de iniciar a venda.</p></details>
          </div>
        </div>
      </section>

      <section class="final-section"><div class="wrap final-inner"><div class="section-label">05 / PRÓXIMA MARCHA</div><h2>TRANSFORME CADA<br>ATENDIMENTO EM <em>OPORTUNIDADE.</em></h2><p>Tenha mais soluções para oferecer aos seus clientes, com uma operação comercial organizada e conectada ao seu escritório.</p><div class="final-actions"><a routerLink="/cadastro-despachante" class="primary-action">ACESSAR PORTAL DO DESPACHANTE <span>↗</span></a><a routerLink="/" fragment="cadastro" class="outline-action">QUERO SER PARCEIRO <span>↗</span></a></div></div></section>
    </main>
  `,
  styles: [`
    :host{display:block} .education-page{background:#0b0b0d;color:#f5f4f1;overflow:hidden} .education-page *{box-sizing:border-box}
    .education-page .wrap{width:min(1200px,calc(100% - 64px));margin:auto}
    .education-page .section-label{font-size:11px;font-weight:900;letter-spacing:.19em;color:#ff5c0a;margin-bottom:25px}
    .education-page h1,.education-page h2,.education-page h3{margin:0;font-weight:900;letter-spacing:-.055em}
    .education-page h1,.education-page h2{line-height:.94}.education-page h2{font-size:clamp(45px,5.6vw,82px)}.education-page em{font-style:normal;color:#ff5c0a}.orange{color:#ff5c0a}
    .edu-hero{position:relative;min-height:750px;background:radial-gradient(ellipse at 87% 45%,#342018 0%,#171111 30%,#0b0b0d 67%);display:flex;align-items:center;isolation:isolate}
    .hero-art{position:absolute;inset:0;overflow:hidden;z-index:-1;pointer-events:none}.hero-number{position:absolute;right:-4%;top:18%;font-size:clamp(300px,40vw,670px);font-weight:900;letter-spacing:-.13em;line-height:1;color:transparent;-webkit-text-stroke:2px rgba(255,92,10,.15);transform:skewX(-8deg)}.hero-track{position:absolute;right:-8%;bottom:14%;width:68%;height:2px;background:linear-gradient(90deg,transparent,#ff5c0a80,transparent);transform:rotate(-20deg);box-shadow:0 30px 0 #ff5c0a18,0 -30px 0 #ff5c0a18}
    .hero-content{padding-top:150px;padding-bottom:100px;position:relative}.edu-hero .eyebrow{color:#ff5c0a;font-size:11px;letter-spacing:.17em;font-weight:900}.orange-dot{margin-left:8px}.hero-tag{font-size:12px;color:#bbb;letter-spacing:.13em;font-weight:800;margin-top:70px}
    .edu-hero h1{font-size:clamp(58px,7.5vw,115px);max-width:1080px;margin:18px 0 28px}.edu-hero p{font-size:18px;line-height:1.65;max-width:600px;color:#c8c8c8}
    .hero-actions,.final-actions{display:flex;gap:13px;flex-wrap:wrap;margin-top:34px}.primary-action,.outline-action{display:inline-flex;align-items:center;justify-content:space-between;gap:30px;padding:19px 24px;border-radius:7px;font-size:12px;font-weight:900;letter-spacing:.035em;text-decoration:none;transition:transform .2s}.primary-action:hover,.outline-action:hover{transform:translateY(-3px)}.primary-action{background:#ff5c0a;color:white}.outline-action{border:1px solid #666;color:white}.primary-action span,.outline-action span{font-size:21px}.hero-foot{margin-top:65px;color:#858585;font-size:10px;font-weight:800;letter-spacing:.14em}.hero-foot span{color:#ff5c0a;margin:0 10px}
    .strip{border-top:1px solid #303030;border-bottom:1px solid #303030;background:#131315}.strip-grid{display:grid;grid-template-columns:repeat(3,1fr)}.strip-grid>div{display:flex;gap:20px;align-items:center;padding:29px 22px;border-right:1px solid #303030}.strip-grid>div:first-child{padding-left:0}.strip-grid>div:last-child{border-right:0}.strip b{color:#ff5c0a;font-size:27px}.strip span{font-size:11px;font-weight:800;letter-spacing:.07em;line-height:1.5}
    .section-dark,.catalog-section,.business-section,.faq-section{padding:115px 0}.section-head{display:grid;grid-template-columns:1.25fr .75fr;gap:50px;align-items:end;margin-bottom:50px}.section-description p,.section-head>p,.business-section p{font-size:16px;line-height:1.7;color:#b9b9b9;max-width:490px}.section-description .muted{font-size:12px;color:#7e7e7e}
    .process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#343436;border:1px solid #343436}.process-card{background:#141416;padding:32px;min-height:275px;display:flex;flex-direction:column}.process-index{color:#ff5c0a;font-size:10px;letter-spacing:.14em;font-weight:900}.process-icon{font-size:40px;margin:28px 0 22px;line-height:1;color:#ededed}.process-card h3{font-size:20px;letter-spacing:-.025em;line-height:1.15;margin-bottom:12px}.process-card p{font-size:13px;color:#a7a7a7;line-height:1.65;margin:0}.accent-card{background:#ff5c0a}.accent-card .process-index,.accent-card .process-icon,.accent-card p{color:#171717}.accent-card h3{color:#111}
    .catalog-section{background:#f5f4f1;color:#111}.catalog-section .section-head>p{color:#555}.catalog-head{margin-bottom:35px}.filters{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px}.filters button{border:1px solid #d1d1d1;background:transparent;padding:12px 15px;border-radius:4px;font-size:10px;font-weight:900;letter-spacing:.07em;color:#444;cursor:pointer}.filters button.active{background:#111;color:#fff;border-color:#111}.filters button:hover{border-color:#ff5c0a}
    .course-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.course-card{background:#fff;border:1px solid #dededc;display:flex;flex-direction:column;transition:transform .2s,border-color .2s}.course-card:hover{transform:translateY(-4px);border-color:#ff5c0a}.course-media{height:220px;background-color:#242426;background-size:cover;background-position:center;position:relative;display:flex;align-items:flex-start;justify-content:space-between;padding:16px;gap:10px}.course-category{background:#ff5c0a;color:white;padding:9px 11px;font-size:10px;text-transform:uppercase;font-weight:900;letter-spacing:.06em}.media-label{align-self:flex-end;color:#eee;font-size:9px;font-weight:900;letter-spacing:.11em;text-align:right}.course-body{padding:25px;display:flex;flex-direction:column;flex:1}.course-meta{display:flex;justify-content:space-between;color:#e35a0c;font-size:10px;font-weight:900;letter-spacing:.08em;margin-bottom:15px}.course-meta span:last-child{font-size:20px}.course-body h3{font-size:25px;line-height:1.07;letter-spacing:-.045em;margin-bottom:12px}.course-body p{font-size:13px;color:#666;line-height:1.6;margin:0 0 15px}.course-note{border-left:2px solid #ff5c0a;padding-left:10px;font-size:12px;line-height:1.5;color:#777;margin-bottom:15px}.course-link{border-top:1px solid #e9e9e9;margin-top:auto;padding-top:20px;display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:10px;font-weight:900;letter-spacing:.06em;color:#111;text-decoration:none}.course-link span{color:#ff5c0a;font-size:20px}.catalog-disclaimer{font-size:12px;color:#777;margin:25px 0 0;line-height:1.6}
    .business-section{background:#151517}.business-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.business-section h2{margin-bottom:25px}.business-section .primary-action{margin-top:20px}.dashboard-preview{border:1px solid #414143;background:#0c0c0e;padding:28px;box-shadow:24px 24px 0 #ff5c0a12}.preview-header{display:flex;justify-content:space-between;align-items:center;color:#ff5c0a;font-size:10px;letter-spacing:.13em;font-weight:900}.preview-pill{border:1px solid #555;color:#bbb;padding:7px}.preview-title{font-size:26px;font-weight:900;letter-spacing:-.04em;margin:40px 0 20px}.preview-tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:25px}.preview-tiles>div{background:#202023;padding:22px;display:grid;gap:18px}.preview-tiles small{color:#aaa;font-size:10px;letter-spacing:.08em}.preview-tiles b{font-size:33px}.preview-row{display:flex;justify-content:space-between;border-top:1px solid #38383a;padding:17px 0;font-size:13px}.preview-row span:last-child{color:#ff5c0a}.preview-footer{font-size:9px;letter-spacing:.12em;color:#777;margin-top:20px}
    .faq-section{background:#0b0b0d}.faq-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:80px}.faq-list details{border-top:1px solid #3a3a3a}.faq-list details:last-child{border-bottom:1px solid #3a3a3a}.faq-list summary{display:flex;justify-content:space-between;align-items:center;gap:20px;list-style:none;cursor:pointer;padding:23px 0;font-weight:800;font-size:15px}.faq-list summary::-webkit-details-marker{display:none}.faq-list summary span{font-size:24px;color:#ff5c0a}.faq-list details p{color:#aaa;font-size:14px;line-height:1.7;padding-right:30px;margin:0 0 25px}
    .final-section{background:#ff5c0a;color:#111;padding:100px 0}.final-section .section-label,.final-section em{color:#111}.final-inner h2{max-width:1000px}.final-inner p{max-width:590px;font-size:17px;line-height:1.6;margin-top:26px}.final-section .primary-action{background:#111;color:#fff}.final-section .outline-action{border-color:#111;color:#111}
    @media(max-width:950px){.process-grid,.course-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.section-head,.business-grid,.faq-grid{grid-template-columns:1fr;gap:25px}.business-grid{gap:50px}.faq-grid{gap:35px}.edu-hero h1{font-size:clamp(56px,9vw,90px)}}
    @media(max-width:640px){.education-page .wrap{width:calc(100% - 36px)}.edu-hero{min-height:700px}.hero-content{padding-top:140px;padding-bottom:65px}.hero-tag{margin-top:45px}.edu-hero h1{font-size:clamp(48px,11.5vw,70px)}.edu-hero p{font-size:15px}.hero-number{top:28%;right:-22%;font-size:350px}.hero-actions,.final-actions{flex-direction:column}.primary-action,.outline-action{width:100%}.hero-foot{font-size:9px;line-height:1.6}.strip-grid{grid-template-columns:1fr}.strip-grid>div,.strip-grid>div:first-child{padding:18px 0;border-right:0;border-bottom:1px solid #303030}.strip-grid>div:last-child{border-bottom:0}.section-dark,.catalog-section,.business-section,.faq-section{padding:75px 0}.education-page h2{font-size:clamp(40px,10vw,60px)}.process-grid,.course-grid{grid-template-columns:1fr}.process-card{min-height:235px}.course-media{height:240px}.dashboard-preview{padding:20px}.preview-title{font-size:23px}.final-section{padding:75px 0}.faq-list summary{font-size:14px}}
  `]
})
export class EducationComponent {
  readonly catalog = courses;
  readonly categories = ['Todos', ...new Set(courses.map(course => course.category))];
  readonly selectedCategory = signal('Todos');
  readonly visibleCourses = computed(() => this.catalog.filter(course => this.selectedCategory() === 'Todos' || course.category === this.selectedCategory()));

  // Substitua os arquivos abaixo por fotografias reais na pasta public/images/courses/.
  // Enquanto não houver foto, o fundo escuro do card permanece visível.
  imageFor(id: string): string {
    return `images/courses/${id}.jpg`;
  }
}
