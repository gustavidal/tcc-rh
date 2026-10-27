# COLABORE — Revisão das rotinas MySQL para backend Node.js

## Instalação
Banco vazio: `00_create_tables_DO_ZERO.sql` → `01_views.sql` → `02_procedures.sql`.
Banco existente: FAÇA BACKUP → `00_migracao_banco_existente.sql` → `01_views.sql` → `02_procedures.sql`.
**Não execute os dois arquivos 00.** Confira dados duplicados antes das UNIQUE. O banco deve ser MySQL 8.0+.
`03_chamadas.sql` contém exemplos. Não execute as chamadas de alteração indiscriminadamente.

## Contrato de indicadores: cálculo no Node.js
Use `procDadosIndicadoresBackend` para obter as entradas brutas por tela/relatório:
`COLABORADORES`, `AVALIACOES`, `NOTAS_COMPETENCIAS`, `ATIVIDADES`, `HORAS`, `METAS`, `PROGRESSO_METAS`, `PARAMETROS`.
A Service Node.js calcula média, índices, percentuais, risco, alertas, distribuição por categoria, cartões do dashboard e compara períodos. Não utilize as views legadas `vw_indicadores_colaboradores`, `vw_sobrecarga_atual`, `vw_alertas_colabore` ou as operações legadas de `procDashboardColabore` para obter percentuais definitivos: são mantidas apenas para compatibilidade e contêm cálculos antigos. `procTelaColaboradores('CARDS',...)` agora retorna registros unitários, não contagens. `procRegistrarSnapshotIndicadores` fica bloqueada para não salvar métricas de cálculo antigo.

## Segurança
Somente RH e gestor acessam. `id_usuario_param` sempre obtido de JWT validado, não do corpo da requisição. A API valida autorização em **cada** rota (inclusive CRUD genéricos). Views diretas NÃO filtram por login. Empregue usuário SQL com privilégio mínimo (EXECUTE nas procedures necessárias e SELECT somente em views autorizadas), e proteção adicional para as views de acesso amplo. `procUsuarioLogin('SELECT_BY_EMAIL_LOGIN')` retorna hash de senha apenas para verificação bcrypt no servidor, nunca no frontend. `UPDATE_EMAIL` e `UPDATE_SENHA` foram separados.

## Requisitos em aberto
- Fórmula de índice de sobrecarga e classificação de risco **não definidas** no PDF; backend deve receber versão aprovada pela equipe. Limite de 80% aparece na tela, mas isso não define fórmula.
- Escala de avaliação 0–5 (slide 16) vs 0–10 em outros lugares: scripts usam 0–10, exigir decisão explícita.
- Falta histórico de mudanças na jornada (uma linha por funcionário). Precisa de evolução de esquema antes de relatórios históricos com exatidão.
- Auditoria para **todo** CRUD não está coberta; RN27/RNF36 exigem extensão de transações e trilhas ou triggers.
- Exclusão de históricos concluídos deve permanecer bloqueada; controlar também privilégios de acesso SQL.
- Sobrecarga histórica, metadados de alerta e snapshots calculados no Node ainda exigem service e endpoint.
- O Swagger entregue é anterior às tabelas estendidas e deve ser atualizado.
- Para exportar PDF, o Node.js deve gerar o documento com os dados que recebe das rotinas.
- **Ainda não houve execução dos scripts em uma instância MySQL de homologação.** Não afirmar 100% homologado antes dos testes.

## Correspondência com as telas
1 Login: `procUsuarioLogin`; 2 dashboard: `procDadosIndicadoresBackend` (combinar datasets);
3–5 alertas: datasets brutos de avaliações/atividades/jornada;
6–9 perfil: `procPerfilUsuarioTela` + `procUsuarioLogin('UPDATE_EMAIL'/'UPDATE_SENHA')`;
10–15 colaboradores: `procTelaColaboradores('LISTA'/'CARDS')`, `procTelaColaboradorDetalhe` e datasets brutos;
16 avaliações: `procAvaliacaoFluxo`, `procRegistrarNotaCompetencia` e dados brutos;
17 competências: `procTelaColaboradorDetalhe` + `NOTAS_COMPETENCIAS`;
18 metas: `procTelaMetas('LISTA')`, `procAtualizarProgressoMeta` e dados brutos;
19–24 relatórios: `procDadosIndicadoresBackend` com filtros e cálculos na Service Node.js.
