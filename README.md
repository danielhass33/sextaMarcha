# Sexta Marcha — Angular + Firebase

Projeto modular Angular standalone (v20) + Firebase Hosting, Firestore e Cloud Functions. **Código-fonte entregue; compilação/deploy não verificados neste ambiente**.

## Estrutura

- `src/app/app.component.ts` — navbar universal, menu sanduíche e rodapé de contato
- `src/app/pages/home.component.ts` — Hero, About, Services, formulário e seções da landing
- `src/app/pages/service-detail.component.ts` — páginas `/solucoes/:slug`, com áreas de vídeo e capturas
- `src/app/data/services.ts` — catálogo tipado e conteúdo editável
- `src/app/components/lead-form.component.ts` — formulário em 3 etapas, validação e animação
- `src/app/core/lead.service.ts` — envio seguro via Firebase callable
- `src/app/core/firebase.ts` — inicialização do SDK e App Check
- `src/environments/environment.ts` — configuração Firebase e canais de contato
- `functions/src/index.ts` — Cloud Function de cadastro com validação server-side e App Check
- `firestore.rules` — acesso direto aos leads bloqueado no cliente
- `firebase.json` — Hosting SPA, Functions e Firestore

## Executar

Requer Node 22 e npm.

```bash
npm install
npm start
```

Acesse `http://localhost:4200`.

## Configurar Firebase

1. Crie um projeto Firebase e registre uma aplicação Web.
2. Substitua os campos `REPLACE_ME` em `src/environments/environment.ts` pelos dados do Web SDK. A configuração web não é um segredo, mas não coloque credenciais de serviço no frontend.
3. Configure **Firebase App Check com reCAPTCHA Enterprise** e preencha `appCheckSiteKey`; configure os domínios permitidos. Para desenvolvimento local, use debug tokens registrados no console em vez de desativar a proteção em produção.
4. Substitua o ID em `.firebaserc` e rode `firebase login` / `firebase use <project-id>`.
5. Para receber leads, habilite Firestore e Cloud Functions (plano Blaze pode ser necessário), e instale dependências: `cd functions && npm install && npm run build && cd ..`.
6. Revise a política de privacidade e condições de tratamento de dados antes de publicar; configure uma página de privacidade real e ajuste o texto de consentimento.
7. Execute `npm run build` e `firebase deploy --only hosting,functions,firestore`.

O formulário **não envia dados** enquanto Firebase e App Check não estiverem configurados. A função grava em `leads` apenas após validar dados e consentimento. As regras Firestore impedem acesso direto pelo navegador. Para operação real, adicionar rate limiting e proteção contra abuso, retenção/exclusão de dados e processos internos de acesso a leads.

## Conteúdo

- Troque `public/images/hero-placeholder.jpg` por fotografia licenciada em alta resolução. O arquivo atual é recorte da imagem de referência do usuário, apenas para protótipo.
- A logo enviada está em `public/images/logo-sexta-marcha.png`.
- Para vídeos e prints, edite `src/app/data/services.ts`: `videoUrl` deve ser URL de embed confiável, `screenshots` uma lista de arquivos públicos, ex. `/images/tela-1.webp`.
- **Não inventamos números do setor automotivo**: a seção About fala dos públicos sem estatísticas não verificadas.
- O primeiro serviço é educação de trânsito; demais estão marcados como planejados.
- Configure `contactEmail` e `contactWhatsApp` em `environment.ts`.
- Este projeto usa um formulário de interesse, não libera login nem comissão automaticamente. A integração com o ambiente de cursos será uma etapa posterior.

## Hospedagem e domínio

Após publicar no Firebase Hosting, vincule `a6marcha.com.br` pelo console do Firebase e aplique os registros DNS fornecidos pelo serviço. Configure SSL e valide rotas internas.
