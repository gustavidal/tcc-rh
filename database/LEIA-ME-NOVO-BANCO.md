# ColaborE — Revisão de procedures e views

Execute sobre um **banco de teste** com o DDL revisado (MySQL 8): primeiro `01_views_CORRIGIDAS_FINAL.sql`, depois `02_procedures_CORRIGIDAS_FINAL.sql`. Não execute o CREATE DO ZERO se já tiver dados.

## Correções
- Corrigida aspa sem fechamento na última view (`vw_backend_avaliacoes_pendentes_bruta`).
- Alterada a procedure de dashboard e alertas para retornar dados brutos, sem calcular médias, porcentagens ou classificação no banco. A API deve agregar e filtrar os resultados de acordo com os indicadores. **O formato de retorno destas operações mudou**, sendo necessária adaptação das Services.
- Corrigida a variável global usada em `procFuncionario.UPDATE`.
- Proteção do último departamento, foto padrão, permissões de lançamentos de avaliação e alterações de meta.
- Corrigida mensagem de redirecionamento nas procedures de histórico.
- Adicionadas consultas de jornada e competências vinculadas em `procDadosIndicadoresBackend`.
- Criada `procSalvarIndicadorBackend` para gravar o índice de sobrecarga e desempenho já calculados pelo Node.js, sem sobrescrever snapshots previamente registrados.
- `procRegistrarSnapshotIndicadores` permanece com erro explícito como operação legada; não efetua cálculo em SQL.

## Limitações conhecidas
- `procRelatoriosColabore` e a operação `CARDS` de `procTelaMetas` ainda incluem agregações antigas e devem ser substituídas no frontend por dados brutos via `procDadosIndicadoresBackend`, evitando regras matemáticas divergentes.
- As procedures de CRUD genéricas são administrativas; exigem autorização na API e privilégios mínimos no usuário MySQL.
- A trilha de auditoria de CRUDs genéricos não está completa.
- Controle de concorrência para remoção do último departamento deve ser reforçado com bloqueios transacionais caso haja atualizações simultâneas.
- `procTelaAlertas` recebe paginação SQL de linhas brutas; como cada funcionário pode possuir diversas atividades/avaliações, paginar pessoas após o cálculo deve ser feito no backend.
- `procDashboardColabore.ALERTAS` une avaliações e atividades e pode multiplicar linhas; preferir `procDadosIndicadoresBackend` para consultas separadas.
- Views legadas com médias e índices permanecem por compatibilidade e **não** devem ser fonte de indicadores finais.
- Scripts auditados estaticamente, **não executados em servidor MySQL 8**.
