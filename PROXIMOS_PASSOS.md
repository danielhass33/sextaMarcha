# Sexta Marcha — implantação comercial

## Implementado neste pacote
- Landing de Educação no Trânsito com catálogo visual.
- Rota `/cadastro-despachante`: criação de usuário Firebase Auth com e-mail e senha, e-mail de verificação e criação de perfil via callable `registerPartner`.
- Perfil criado no Firestore em `partners/{uid}` com `role: partner` e `status: pending`. O parceiro pode entrar no portal, mas não pode vender até aprovação.
- Portal existente de login e indicadores (dados de vendas somente leitura).
- Função de cadastro exige Firebase App Check e autenticação; o cliente não pode escrever perfis diretamente.

## Configuração obrigatória
1. Configure `src/environments/environment.ts` com os identificadores públicos do projeto Firebase e a chave de site do reCAPTCHA Enterprise (App Check).
2. No Firebase Console, habilite Authentication > Email/Password e adicione o domínio do site aos domínios autorizados.
3. Crie Firestore em modo produção; revise e publique `firestore.rules` considerando todos os outros usos do mesmo projeto.
4. Instale dependências: `npm install`, `cd functions && npm install && npm run build`.
5. Na raiz: `npm run build`. Configure `.firebaserc` com o project ID correto.
6. Execute `firebase deploy --only functions,hosting` após validar os ambientes. Publique regras separadamente depois de revisar: `firebase deploy --only firestore:rules,firestore:indexes`.
7. Teste `/cadastro-despachante`, confirmação de e-mail, login `/portal` e documento `partners/{uid}` com `status: pending`.
8. Aprovação inicial: um administrador altera manualmente `status` para `active` no Console. Depois será criada tela administrativa com trilha de auditoria. Não habilite comercialização até a integração de pagamentos/matrículas.

## Ainda não implementado
- Checkout, preços, cobrança, webhooks, cadastro de alunos, matrícula ICETRAN, comissões financeiras e transferências semanais. **Nenhuma venda nem transferência real é realizada por este pacote.**
- Política de privacidade publicada, termos comerciais, KYC e validação bancária para repasses. O texto do consentimento é provisório; publicar os documentos antes de abrir cadastros reais.
- Recuperação de senha e tratamento automático de falhas de criação parcial de conta (Firebase Auth criado, callable indisponível). Necessário implementar antes de lançamento amplo.
- O formulário geral da landing permanece um cadastro de interesse; o novo formulário específico de despachante é o de criação de login.

## GitHub
Para atualizar o repositório existente sem sobrescrever mudanças remotas: faça backup/commit da versão atual, use `git pull --rebase origin main` e integre os arquivos deste pacote; confira `git diff`, `npm run build` e só então `git push origin main`. Nunca faça push de senhas, chaves privadas ou service accounts. As configurações web públicas do Firebase não são segredos, mas devem ser revisadas.
