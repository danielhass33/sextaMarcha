# Sexta Marcha — Fluxo de cadastro, link e checkout (homologação)

## Fluxo
1. Parceiro autenticado escolhe Reciclagem SC, cadastra aluno e revisa.
2. Cloud Function `createTestCourseOrder` cria `students`, `orders` e token aleatório (somente hash no Firestore).
3. Portal mostra link `/comprar/<token>` para copiar/compartilhar no WhatsApp. Link também pode ser renovado em Vendas.
4. Cliente abre checkout público, vê resumo e dados mínimos e confirma **pagamento fictício**.
5. Function `confirmSandboxCheckout` cria `sales`, `commissions`, `enrollments` e evento de forma transacional e idempotente. Até esse momento não há comissão.
6. Pagamentos sandbox ficam separados das vendas reais; comissão `payable:false`.

## Rotas
- `/portal`, `/portal/cursos`, `/portal/nova-venda`, `/portal/vendas`, `/portal/comissoes`, `/portal/clientes`, `/portal/estabelecimento` — histórico Voltar/Avançar pelo Angular Router.
- `/comprar/:token` — página pública de checkout demonstrativo.

## Implantação
1. `npm ci` (ou `npm install` caso necessário).
2. `cd functions && npm ci && npm run build && cd ..`
3. `npm run build`
4. `firebase deploy --only functions,hosting` (e regras se forem alteradas futuramente).
5. Verifique App Check/recaptcha Enterprise nos domínios e Functions região `southamerica-east1`.
6. Teste com dados fictícios, não com CPF/CNH de clientes reais.

## Limitações importantes
- **Nenhum pagamento real**: botão simula a confirmação em Cloud Function. Gateway, webhook, reembolso e ICETRAN ainda precisam de integração e homologação.
- O token é uma credencial de acesso aos dados resumidos do aluno; compartilhe somente com o cliente. Expira em 30 dias, e o parceiro pode gerar novo link. Links antigos ainda funcionam até expirar.
- O checkout público é protegido por App Check e token aleatório. Antes de produção, adicionar limitação de tentativas, política de privacidade/LGPD, revogação de tokens, consentimento específico e revisão de acesso a dados pessoais.
- Não usar `simulateCoursePayment` do painel Master: foi desativado para que somente a página do cliente possa confirmar o pagamento fictício.
- O ambiente de compilação usado para validação é Linux, mas o node_modules original do ZIP é Windows. A checagem Angular de tipos/templates (`ngc`) e a compilação TypeScript das Functions passaram; o bundle Angular completo não pôde ser executado no Linux por incompatibilidade do binário esbuild do ZIP.
