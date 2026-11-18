# Sexta Marcha — atualização comercial e visual

## Entregas
- Landing principal redesenhada com foco em conversão de despachantes, CTA para cadastro, fluxo de 4 etapas, catálogo visual, ilustração do portal e FAQ.
- Menu público orientado a como funciona, cursos, portal, dúvidas, login e cadastro.
- Visão geral com indicadores reais do ambiente **sandbox** obtidos da lista de pedidos (não usa números fictícios); métricas reais continuam separadas.
- Clientes cadastrados exibidos a partir dos pedidos vinculados ao parceiro, mesmo antes do pagamento. A lista exibe dados mínimos de contato e status e permite recuperar link de pedidos pendentes.
- Nova venda com jornada ilustrada e explicação direta da comissão.
- Contrato TypeScript de provedor de pagamento em `functions/src/payments/payment-provider.ts`, com adaptador Pagar.me **não operacional** por segurança.

## Implantação
1. Salve backup da pasta anterior e copie os arquivos da nova versão.
2. Na raiz: `npm install` e `npm run build`.
3. Em `functions`: `npm install` e `npm run build`.
4. Teste local com `npm start`.
5. Após validação: `firebase use` e `firebase deploy --only functions:listCourseOrders,hosting`.
6. Não publique novas regras ou funções financeiras sem revisão das permissões e homologação.

## Validação manual obrigatória
- Faça login como parceiro ativo; crie pedido de teste; confira cliente em **Clientes** e pedido pendente em **Visão geral**.
- Gere link e abra em sessão anônima; confirme pagamento **simulado**; atualize visão geral e verifique comissão apenas após confirmação.
- Teste voltar/avançar do navegador entre seções e layout em celular.
- Verifique a leitura do Firestore em ambientes reais e master antes do deploy.

## Pagar.me e split — pendências antes de produção
- Definir quem é merchant of record e quem emite documentos fiscais, política de estornos e taxas.
- Confirmar capacidade de split para cada recebedor, requisitos de KYC, antecipação e liquidação no contrato do Pagar.me.
- Criar recebedores e validar status KYC no backend, sem armazenar chaves no Angular.
- Implementar adaptador Pagar.me no servidor, webhook com autenticação/verificação de origem conforme documentação vigente, idempotência e conciliação.
- Definir regra versionada de comissões por parceiro/oferta e política de reembolso.
- Registrar pagamento somente após evento confiável do gateway; nunca pelo clique do navegador.
- Manter `environment: sandbox` totalmente isolado de receitas e comissões reais.
- Integrar matrícula com ICETRAN apenas após confirmação confiável de pagamento.

**Não há integração Pagar.me, split, cobrança real ou matrícula ICETRAN nesta entrega.**
