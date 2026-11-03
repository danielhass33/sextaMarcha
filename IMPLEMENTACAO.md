# Sexta Marcha — adaptação comercial (fase 1)

## Implementado
- Landing de educação no trânsito em `/educacao-no-transito` com catálogo informativo derivado dos manuais fornecidos.
- Portal `/portal` com autenticação Firebase Email/Senha e perfil comercial ativo.
- Dashboard real de vendas confirmadas por curso, faturamento e comissão registrada, sem dados simulados.
- Regras Firestore de leitura por parceiro e administrador; escrita financeira bloqueada no cliente.
- Página institucional original e demais módulos preservados.

## Configuração necessária
1. Configure o Firebase no ambiente já existente (`src/environments/environment.ts`).
2. Habilite Firebase Authentication Email/Senha no console.
3. Crie usuários pelo console Auth e documentos `partners/{uid}` pelo console/Admin SDK, com `role: 'partner'` ou `role: 'admin'`, `status: 'active'`.
4. Publique as regras com `firebase deploy --only firestore:rules` **somente após revisar compatibilidade com coleções usadas em produção**: este arquivo substitui regras existentes.
5. Para testes do painel, somente backend Admin SDK deve inserir documentos em `sales` com `partnerId`, `courseId`, `amount`, `commissionAmount`, `status: 'paid'` (valores monetários em reais nesta versão de leitura). Não inserir vendas fictícias em produção.

## Pendente antes de produção comercial
- Escolha do provedor financeiro e credenciais seguras em Functions, nunca no Angular.
- Checkout, webhook autenticado, idempotência, ledger de comissões em centavos e conciliação.
- Matrícula/ativação com ICETRAN, validação dos cursos por estado e requisitos.
- Cadastro seguro de alunos com LGPD e consentimento/hipótese legal apropriada.
- Rotina semanal de fechamento e transferências com controles de liquidação, estornos e auditoria.
- Aprovação de parceiros e condições contratuais/fiscais.
- Índices Firestore conforme consultas futuras e revisão das regras existentes antes de deploy.

**A fase 1 não recebe pagamentos, não cadastra alunos e não transfere comissões.**
