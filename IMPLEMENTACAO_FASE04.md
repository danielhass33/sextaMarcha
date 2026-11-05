# Sexta Marcha — Fase 04 (cadastro + portal + master)

## Preparação
1. Configure `src/environments/environment.ts` com os dados públicos do Firebase Web App e chave pública reCAPTCHA Enterprise App Check. NÃO use chave de serviço no frontend.
2. Habilite Authentication > Email/Senha; configure domínios autorizados, incluindo localhost para testes quando aplicável.
3. Crie Firestore em modo produção. Confirme plano e faturamento necessários para Cloud Functions v2.
4. `npm ci && npm run build && npm start`.
5. `cd functions && npm ci && npm run build && cd ..`.
6. Revise as regras Firestore atuais antes de publicar; `firebase use --add`, `firebase deploy --only firestore:rules,functions` (somente se as regras forem apropriadas para este projeto).
7. Teste cadastro em `/cadastro-despachante`, verifique Authentication e `partners/{uid}` com status `pending`. Confirme e-mail.

## Bootstrap do primeiro master (somente Console/Admin SDK)
- Crie primeiro uma conta de teste pelo cadastro ou via Firebase Authentication; anote o UID.
- Pelo Firebase Console (ou script Admin SDK com credenciais administrativas fora do repositório), configure `partners/{uid}` com `role: "master"`, `status: "active"`, `uid`, `email`, `name` e os demais campos pertinentes. **NUNCA** permita escolher `master` pelo formulário público.
- Acesse `/master` com essa conta. O master pode aprovar/suspender apenas parceiros via Cloud Function.
- Não configure `master` em produção sem verificar identidade, MFA e governança de acesso. A função exige autenticação e App Check.

## Modelo de dados
- `partners/{uid}`: `name`, `business`, `cnpj`, `crdd`, `phone`, `city`, `email`, `role`, `status`, `commissionRate`, `createdAt`.
- `sales/{saleId}` (futuro): `partnerId`, `courseId`, `amount`, `commissionAmount`, `status`, `createdAt` — somente backend grava.
- O cadastro faz validação dos dígitos do CNPJ, mas **não verifica situação cadastral** na Receita Federal nem vínculo CRDD; isso requer integração ou análise manual.
- O painel master lê `partners` e `sales` de acordo com as regras. O portal do parceiro lê apenas seu próprio perfil e vendas.
- Vendas, checkout, matrícula, comissões liquidadas e repasses ainda NÃO foram implementados.

## Publicação
- Crie branch a partir da main atual, copie os arquivos desta fase, revise `.firebaserc` e `environment.ts`, `npm ci`, `npm run build`, `git add .`, `git commit`, `git push` e PR para main.
- GitHub Pages hospeda o frontend estático; Firebase executa Authentication, Firestore e Cloud Functions separadamente.
- A verificação de e-mail foi solicitada, mas a habilitação de vendas deve exigir e-mail verificado no backend das futuras vendas. Atualmente o acesso ao painel depende de status `active`.
