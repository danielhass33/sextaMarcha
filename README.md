# Sexta Marcha — Angular + Firebase

## Estrutura

- `src/app/app.component.ts|html|css`: shell, menu e rodapé
- `src/app/pages/`: páginas com TS, HTML e CSS separados
- `src/app/components/`: componentes reutilizáveis
- `src/app/core/`: integração Firebase e serviços existentes
- `src/app/data/`: catálogos de cursos e soluções
- `src/app/app.routes.ts`: rotas lazy-loaded
- `src/environments/environment.ts`: configuração pública do Firebase
- `functions/`: Cloud Functions (backend; não roda no GitHub Pages)

## Executar

```bash
npm ci
npm start
npm run build
```

## Rotas

- `/` — landing institucional
- `/educacao-no-transito` — catálogo e apresentação comercial
- `/cadastro-despachante` — cadastro com autenticação Firebase
- `/portal` — área comercial do despachante
- `/solucoes/:slug` — detalhes de soluções

## Publicação

GitHub Pages: push para `main` executa `.github/workflows/deploy.yml`.
Configure Settings > Pages > Source: GitHub Actions.
A rota Angular em acesso direto usa `404.html` como fallback no GitHub Pages.

## Atenção antes de liberar vendas reais

- Conferir configuração Firebase e App Check, habilitar Authentication, Firestore e Functions.
- Revisar regras Firestore existentes antes de fazer deploy.
- Homologar cadastro e aprovação de parceiros, confirmação de e-mail e recuperação de senha.
- Checkout, matrícula, comissões e repasses automáticos **ainda não estão operacionais**.
- Nunca versionar credenciais de contas de serviço ou segredos do provedor de pagamentos.
