-- ===========================================================
-- COLABORE - CHAMADAS DE TESTE / MAPEAMENTO DE TELAS
-- Chamadas que escrevem dados ficam comentadas.
-- Substitua id_usuario=1 por usuário RH/gestor REAL para obter resultados.
-- Se não houver dados cadastrados, SELECT pode retornar vazio.
-- ===========================================================

-- ===========================================================
-- COLABORE - CHAMADAS DE TODAS AS 31 PROCEDURES (MySQL 8+)
-- Rode APÓS criar as VIEWS e as PROCEDURES.
-- Chamadas SELECT_ALL e SELECT_BY_ID ativas: leitura somente.
-- INSERT, UPDATE, DELETE e filtros opcionais: comentados.
-- Os IDs exemplificativos podem não existir no seu banco.
-- IMPORTANTE: não execute DELETE sem revisar FKs e dependências.
-- As chamadas de INSERT/UPDATE incluem valores ILUSTRATIVOS,
-- não são dados de teste prontos para produção.
-- ===========================================================

##################### ARQUIVO RESPONSÁVEL PELAS CHAMADAS DAS PROCEDURES #####################

-- ===========================================================
-- COLABORE - CHAMADAS ATUALIZADAS DAS 54 PROCEDURES (MySQL 8+)
-- Compatível com 02_procedures_CORRIGIDAS_FINAL.sql
-- 27/10/2026 | Exemplos de leitura ativos; gravações comentadas.
-- ATENÇÃO: id_usuario = 7 é ilustrativo (perfil administrativo do seed).
-- Altere o id para um usuário autorizado existente no seu banco.
-- NULL em parâmetros de filtros significa filtro não aplicado.
-- Não execute as chamadas comentadas sem validar IDs, FKs e permissões.
-- ===========================================================

use db_tcc_rh;

-- ====== 01. PROCEDURES CRUD E CONSULTAS DE CADASTRO ======

-- ====== procTipoCompetencia ======
-- Ordem: operacao, tipo_param, id_param
call procTipoCompetencia('SELECT_ALL', NULL, NULL);
call procTipoCompetencia('SELECT_BY_ID', NULL, 1);
-- call procTipoCompetencia('INSERT', 'EXEMPLO', NULL);
-- call procTipoCompetencia('UPDATE', 'EXEMPLO', 1);
-- call procTipoCompetencia('DELETE', NULL, 1);

-- ====== procStatusCompetencia ======
-- Ordem: operacao, status_param, id_param
call procStatusCompetencia('SELECT_ALL', NULL, NULL);
call procStatusCompetencia('SELECT_BY_ID', NULL, 1);
-- call procStatusCompetencia('INSERT', 'EXEMPLO', NULL);
-- call procStatusCompetencia('UPDATE', 'EXEMPLO', 1);
-- call procStatusCompetencia('DELETE', NULL, 1);

-- ====== procTipoTelefone ======
-- Ordem: operacao, tipo_param, id_param
call procTipoTelefone('SELECT_ALL', NULL, NULL);
call procTipoTelefone('SELECT_BY_ID', NULL, 1);
-- call procTipoTelefone('INSERT', 'EXEMPLO', NULL);
-- call procTipoTelefone('UPDATE', 'EXEMPLO', 1);
-- call procTipoTelefone('DELETE', NULL, 1);

-- ====== procTipoEmail ======
-- Ordem: operacao, tipo_param, id_param
call procTipoEmail('SELECT_ALL', NULL, NULL);
call procTipoEmail('SELECT_BY_ID', NULL, 1);
-- call procTipoEmail('INSERT', 'EXEMPLO', NULL);
-- call procTipoEmail('UPDATE', 'EXEMPLO', 1);
-- call procTipoEmail('DELETE', NULL, 1);

-- ====== procStatusFuncionario ======
-- Ordem: operacao, status_param, id_param
call procStatusFuncionario('SELECT_ALL', NULL, NULL);
call procStatusFuncionario('SELECT_BY_ID', NULL, 1);
-- call procStatusFuncionario('INSERT', 'EXEMPLO', NULL);
-- call procStatusFuncionario('UPDATE', 'EXEMPLO', 1);
-- call procStatusFuncionario('DELETE', NULL, 1);

-- ====== procStatusMeta ======
-- Ordem: operacao, status_param, id_param
call procStatusMeta('SELECT_ALL', NULL, NULL);
call procStatusMeta('SELECT_BY_ID', NULL, 1);
-- call procStatusMeta('INSERT', 'EXEMPLO', NULL);
-- call procStatusMeta('UPDATE', 'EXEMPLO', 1);
-- call procStatusMeta('DELETE', NULL, 1);

-- ====== procSexo ======
-- Ordem: operacao, sigla_param, sexo_param, id_param
call procSexo('SELECT_ALL', NULL, NULL, NULL);
call procSexo('SELECT_BY_ID', NULL, NULL, 1);
-- call procSexo('INSERT', 'EXEMPLO', 'EXEMPLO', NULL);
-- call procSexo('UPDATE', 'EXEMPLO', 'EXEMPLO', 1);
-- call procSexo('DELETE', NULL, NULL, 1);

-- ====== procCargo ======
-- Ordem: operacao, nome_param, id_param
call procCargo('SELECT_ALL', NULL, NULL);
call procCargo('SELECT_BY_ID', NULL, 1);
-- call procCargo('INSERT', 'EXEMPLO', NULL);
-- call procCargo('UPDATE', 'EXEMPLO', 1);
-- call procCargo('DELETE', NULL, 1);

-- ====== procFuncao ======
-- Ordem: operacao, nome_param, id_param
call procFuncao('SELECT_ALL', NULL, NULL);
call procFuncao('SELECT_BY_ID', NULL, 1);
-- call procFuncao('INSERT', 'EXEMPLO', NULL);
-- call procFuncao('UPDATE', 'EXEMPLO', 1);
-- call procFuncao('DELETE', NULL, 1);

-- ====== procDepartamento ======
-- Ordem: operacao, nome_param, id_param
call procDepartamento('SELECT_ALL', NULL, NULL);
call procDepartamento('SELECT_BY_ID', NULL, 1);
-- call procDepartamento('INSERT', 'EXEMPLO', NULL);
-- call procDepartamento('UPDATE', 'EXEMPLO', 1);
-- call procDepartamento('DELETE', NULL, 1);

-- ====== procFotoFuncionario ======
-- Ordem: operacao, foto_param, id_param
call procFotoFuncionario('SELECT_ALL', NULL, NULL);
call procFotoFuncionario('SELECT_BY_ID', NULL, 1);
-- call procFotoFuncionario('INSERT', 'EXEMPLO', NULL);
-- call procFotoFuncionario('UPDATE', 'EXEMPLO', 1);
-- NÃO excluir a foto padrão id=1.
-- call procFotoFuncionario('DELETE', NULL, 1);

-- ====== procFotoUsuario ======
-- Ordem: operacao, foto_param, id_param
call procFotoUsuario('SELECT_ALL', NULL, NULL);
call procFotoUsuario('SELECT_BY_ID', NULL, 1);
-- call procFotoUsuario('INSERT', 'EXEMPLO', NULL);
-- call procFotoUsuario('UPDATE', 'EXEMPLO', 1);
-- NÃO excluir a foto padrão id=1.
-- call procFotoUsuario('DELETE', NULL, 1);

-- ====== procTelefone ======
-- Ordem: operacao, numero_param, id_tipo_telefone_param, id_param
call procTelefone('SELECT_ALL', NULL, NULL, NULL);
call procTelefone('SELECT_BY_ID', NULL, NULL, 1);
call procTelefone('SELECT_BY_TIPO_TELEFONE', NULL, 1, NULL);
-- call procTelefone('INSERT', 'EXEMPLO', 1, NULL);
-- call procTelefone('UPDATE', 'EXEMPLO', 1, 1);
-- call procTelefone('DELETE', NULL, NULL, 1);

-- ====== procEmail ======
-- Ordem: operacao, email_param, id_tipo_email_param, id_param
call procEmail('SELECT_ALL', NULL, NULL, NULL);
call procEmail('SELECT_BY_ID', NULL, NULL, 1);
call procEmail('SELECT_BY_TIPO_EMAIL', NULL, 1, NULL);
call procEmail('SELECT_BY_EMAIL', 'teste@exemplo.com', NULL, NULL);
-- call procEmail('INSERT', 'EXEMPLO', 1, NULL);
-- call procEmail('UPDATE', 'EXEMPLO', 1, 1);
-- call procEmail('DELETE', NULL, NULL, 1);

-- ====== procUsuario ======
-- Ordem: operacao, nome_param, data_nascimento_param, id_foto_usuario_param, id_param
call procUsuario('SELECT_ALL', NULL, NULL, NULL, NULL);
call procUsuario('SELECT_BY_ID', NULL, NULL, NULL, 1);
call procUsuario('SELECT_BY_FOTO_USUARIO', NULL, NULL, 1, NULL);
call procUsuario('SELECT_BY_NOME', 'Ana', NULL, NULL, NULL);
-- call procUsuario('INSERT', 'EXEMPLO', '2026-01-01', 1, NULL);
-- call procUsuario('UPDATE', 'EXEMPLO', '2026-01-01', 1, 1);
-- call procUsuario('DELETE', NULL, NULL, NULL, 1);

-- ====== procUsuarioLogin ======
-- Ordem: operacao, email_login_param, senha_hash_param, id_usuario_param, id_param
call procUsuarioLogin('SELECT_ALL', NULL, NULL, NULL, NULL);
call procUsuarioLogin('SELECT_BY_ID', NULL, NULL, NULL, 1);
call procUsuarioLogin('SELECT_BY_USUARIO', NULL, NULL, 1, NULL);
-- Consulta de autenticação (retorna hash; nunca enviar ao frontend):
-- call procUsuarioLogin('SELECT_BY_EMAIL_LOGIN', 'login@exemplo.com', NULL, NULL, NULL);
-- call procUsuarioLogin('INSERT', 'EXEMPLO', 'HASH_GERADO_NO_BACKEND', 1, NULL);
-- call procUsuarioLogin('UPDATE', 'EXEMPLO', 'HASH_GERADO_NO_BACKEND', 1, 1);
-- call procUsuarioLogin('DELETE', NULL, NULL, NULL, 1);
-- call procUsuarioLogin('UPDATE_EMAIL', 'novo@exemplo.com', NULL, NULL, 1);
-- call procUsuarioLogin('UPDATE_SENHA', NULL, 'HASH_BCRYPT_GERADO_PELO_BACKEND', NULL, 1);

-- ====== procAdministrativo ======
-- Ordem: operacao, id_usuario_param, id_param
call procAdministrativo('SELECT_ALL', NULL, NULL);
call procAdministrativo('SELECT_BY_ID', NULL, 1);
call procAdministrativo('SELECT_BY_USUARIO', 1, NULL);
-- call procAdministrativo('INSERT', 1, NULL);
-- call procAdministrativo('UPDATE', 1, 1);
-- call procAdministrativo('DELETE', NULL, 1);

-- ====== procGestor ======
-- Ordem: operacao, id_usuario_param, id_param
call procGestor('SELECT_ALL', NULL, NULL);
call procGestor('SELECT_BY_ID', NULL, 1);
call procGestor('SELECT_BY_USUARIO', 1, NULL);
-- call procGestor('INSERT', 1, NULL);
-- call procGestor('UPDATE', 1, 1);
-- call procGestor('DELETE', NULL, 1);

-- ====== procUsuarioTelefone ======
-- Ordem: operacao, id_usuario_param, id_telefone_param, id_param
call procUsuarioTelefone('SELECT_ALL', NULL, NULL, NULL);
call procUsuarioTelefone('SELECT_BY_ID', NULL, NULL, 1);
call procUsuarioTelefone('SELECT_BY_USUARIO', 1, NULL, NULL);
call procUsuarioTelefone('SELECT_BY_TELEFONE', NULL, 1, NULL);
-- call procUsuarioTelefone('INSERT', 1, 1, NULL);
-- call procUsuarioTelefone('UPDATE', 1, 1, 1);
-- call procUsuarioTelefone('DELETE', NULL, NULL, 1);

-- ====== procCompetencia ======
-- Ordem: operacao, descricao_param, nivel_esperado_param, data_ultima_avaliacao_param, id_tipo_competencia_param, id_status_competencia_param, id_param
call procCompetencia('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL);
call procCompetencia('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, 1);
call procCompetencia('SELECT_BY_TIPO_COMPETENCIA', NULL, NULL, NULL, 1, NULL, NULL);
call procCompetencia('SELECT_BY_STATUS_COMPETENCIA', NULL, NULL, NULL, NULL, 1, NULL);
-- call procCompetencia('INSERT', 'EXEMPLO', 1.0, '2026-01-01', 1, 1, NULL);
-- call procCompetencia('UPDATE', 'EXEMPLO', 1.0, '2026-01-01', 1, 1, 1);
-- call procCompetencia('DELETE', NULL, NULL, NULL, NULL, NULL, 1);

-- ====== procMetaOrganizacional ======
-- Ordem: operacao, titulo_param, prazo_param, descricao_param, id_status_meta_param, id_param
call procMetaOrganizacional('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
call procMetaOrganizacional('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
call procMetaOrganizacional('SELECT_BY_STATUS_META', NULL, NULL, NULL, 1, NULL);
-- call procMetaOrganizacional('INSERT', 'EXEMPLO', '2026-01-01', 'EXEMPLO', 1, NULL);
-- call procMetaOrganizacional('UPDATE', 'EXEMPLO', '2026-01-01', 'EXEMPLO', 1, 1);
-- call procMetaOrganizacional('DELETE', NULL, NULL, NULL, NULL, 1);

-- ====== procFuncionario ======
-- Ordem: operacao, nome_social_param, nome_param, cpf_param, data_contratacao_param, data_nascimento_param, numero_matricula_param, id_sexo_param, id_cargo_param, id_gestor_param, id_foto_funcionario_param, id_status_funcionario_param, id_departamento_param, id_param
call procFuncionario('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);
call procFuncionario('SELECT_BY_SEXO', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_CARGO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_GESTOR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_FOTO_FUNCIONARIO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_STATUS_FUNCIONARIO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL);
call procFuncionario('SELECT_BY_CPF', NULL, NULL, '000.000.000-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_MATRICULA', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_NOME', NULL, 'Ana', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
call procFuncionario('SELECT_BY_DEPARTAMENTO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL);
-- call procFuncionario('INSERT', 'EXEMPLO', 'EXEMPLO', 'EXEMPLO', '2026-01-01', '2026-01-01', 1, 1, 1, 1, 1, 1, NULL, NULL);
-- call procFuncionario('UPDATE', 'EXEMPLO', 'EXEMPLO', 'EXEMPLO', '2026-01-01', '2026-01-01', 1, 1, 1, 1, 1, 1, NULL, 1);
-- call procFuncionario('DELETE', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- ====== procAvaliacao ======
-- Ordem: operacao, data_avaliacao_param, nota_param, observacao_param, id_funcionario_param, id_param
call procAvaliacao('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
call procAvaliacao('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
call procAvaliacao('SELECT_BY_FUNCIONARIO', NULL, NULL, NULL, 1, NULL);
-- INSERT/UPDATE/DELETE bloqueados nesta versão. Utilize o fluxo especializado.

-- ====== procFuncaoFuncionario ======
-- Ordem: operacao, id_funcao_param, id_funcionario_param, id_param
call procFuncaoFuncionario('SELECT_ALL', NULL, NULL, NULL);
call procFuncaoFuncionario('SELECT_BY_ID', NULL, NULL, 1);
call procFuncaoFuncionario('SELECT_BY_FUNCAO', 1, NULL, NULL);
call procFuncaoFuncionario('SELECT_BY_FUNCIONARIO', NULL, 1, NULL);
-- call procFuncaoFuncionario('INSERT', 1, 1, NULL);
-- call procFuncaoFuncionario('UPDATE', 1, 1, 1);
-- call procFuncaoFuncionario('DELETE', NULL, NULL, 1);

-- ====== procCompetenciaFuncionario ======
-- Ordem: operacao, id_competencia_param, id_funcionario_param, id_param
call procCompetenciaFuncionario('SELECT_ALL', NULL, NULL, NULL);
call procCompetenciaFuncionario('SELECT_BY_ID', NULL, NULL, 1);
call procCompetenciaFuncionario('SELECT_BY_COMPETENCIA', 1, NULL, NULL);
call procCompetenciaFuncionario('SELECT_BY_FUNCIONARIO', NULL, 1, NULL);
-- call procCompetenciaFuncionario('INSERT', 1, 1, NULL);
-- call procCompetenciaFuncionario('UPDATE', 1, 1, 1);
-- call procCompetenciaFuncionario('DELETE', NULL, NULL, 1);

-- ====== procMetaOrganizacionalFuncionario ======
-- Ordem: operacao, id_meta_organizacional_param, id_funcionario_param, id_param
call procMetaOrganizacionalFuncionario('SELECT_ALL', NULL, NULL, NULL);
call procMetaOrganizacionalFuncionario('SELECT_BY_ID', NULL, NULL, 1);
call procMetaOrganizacionalFuncionario('SELECT_BY_META_ORGANIZACIONAL', 1, NULL, NULL);
call procMetaOrganizacionalFuncionario('SELECT_BY_FUNCIONARIO', NULL, 1, NULL);
-- call procMetaOrganizacionalFuncionario('INSERT', 1, 1, NULL);
-- call procMetaOrganizacionalFuncionario('UPDATE', 1, 1, 1);
-- call procMetaOrganizacionalFuncionario('DELETE', NULL, NULL, 1);

-- ====== procFuncionarioDepartamento ======
-- Ordem: operacao, id_funcionario_param, id_departamento_param, id_param
call procFuncionarioDepartamento('SELECT_ALL', NULL, NULL, NULL);
call procFuncionarioDepartamento('SELECT_BY_ID', NULL, NULL, 1);
call procFuncionarioDepartamento('SELECT_BY_FUNCIONARIO', 1, NULL, NULL);
call procFuncionarioDepartamento('SELECT_BY_DEPARTAMENTO', NULL, 1, NULL);
-- call procFuncionarioDepartamento('INSERT', 1, 1, NULL);
-- call procFuncionarioDepartamento('UPDATE', 1, 1, 1);
-- call procFuncionarioDepartamento('DELETE', NULL, NULL, 1);

-- ====== procFuncionarioTelefone ======
-- Ordem: operacao, id_funcionario_param, id_telefone_param, id_param
call procFuncionarioTelefone('SELECT_ALL', NULL, NULL, NULL);
call procFuncionarioTelefone('SELECT_BY_ID', NULL, NULL, 1);
call procFuncionarioTelefone('SELECT_BY_FUNCIONARIO', 1, NULL, NULL);
call procFuncionarioTelefone('SELECT_BY_TELEFONE', NULL, 1, NULL);
-- call procFuncionarioTelefone('INSERT', 1, 1, NULL);
-- call procFuncionarioTelefone('UPDATE', 1, 1, 1);
-- call procFuncionarioTelefone('DELETE', NULL, NULL, 1);

-- ====== procFuncionarioEmail ======
-- Ordem: operacao, id_funcionario_param, id_email_param, id_param
call procFuncionarioEmail('SELECT_ALL', NULL, NULL, NULL);
call procFuncionarioEmail('SELECT_BY_ID', NULL, NULL, 1);
call procFuncionarioEmail('SELECT_BY_FUNCIONARIO', 1, NULL, NULL);
call procFuncionarioEmail('SELECT_BY_EMAIL', NULL, 1, NULL);
-- call procFuncionarioEmail('INSERT', 1, 1, NULL);
-- call procFuncionarioEmail('UPDATE', 1, 1, 1);
-- call procFuncionarioEmail('DELETE', NULL, NULL, 1);

-- ====== procDepartamentoTelefone ======
-- Ordem: operacao, id_departamento_param, id_telefone_param, id_param
call procDepartamentoTelefone('SELECT_ALL', NULL, NULL, NULL);
call procDepartamentoTelefone('SELECT_BY_ID', NULL, NULL, 1);
call procDepartamentoTelefone('SELECT_BY_DEPARTAMENTO', 1, NULL, NULL);
call procDepartamentoTelefone('SELECT_BY_TELEFONE', NULL, 1, NULL);
-- call procDepartamentoTelefone('INSERT', 1, 1, NULL);
-- call procDepartamentoTelefone('UPDATE', 1, 1, 1);
-- call procDepartamentoTelefone('DELETE', NULL, NULL, 1);

-- ====== procDepartamentoEmail ======
-- Ordem: operacao, id_departamento_param, id_email_param, id_param
call procDepartamentoEmail('SELECT_ALL', NULL, NULL, NULL);
call procDepartamentoEmail('SELECT_BY_ID', NULL, NULL, 1);
call procDepartamentoEmail('SELECT_BY_DEPARTAMENTO', 1, NULL, NULL);
call procDepartamentoEmail('SELECT_BY_EMAIL', NULL, 1, NULL);
-- call procDepartamentoEmail('INSERT', 1, 1, NULL);
-- call procDepartamentoEmail('UPDATE', 1, 1, 1);
-- call procDepartamentoEmail('DELETE', NULL, NULL, 1);

-- ====== procAvaliacaoCompetencia ======
-- Ordem: operacao, id_avaliacao_param, id_competencia_param, nota_param, observacao_param, id_param
call procAvaliacaoCompetencia('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
call procAvaliacaoCompetencia('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
call procAvaliacaoCompetencia('SELECT_BY_AVALIACAO', 1, NULL, NULL, NULL, NULL);
-- INSERT/UPDATE/DELETE bloqueados nesta versão. Utilize o fluxo especializado.

-- ====== procJornadaFuncionario ======
-- Ordem: operacao, id_funcionario_param, horas_semanais_param, vigente_desde_param, id_param
call procJornadaFuncionario('SELECT_ALL', NULL, NULL, NULL, NULL);
call procJornadaFuncionario('SELECT_BY_ID', NULL, NULL, NULL, 1);
call procJornadaFuncionario('SELECT_BY_FUNCIONARIO', 1, NULL, NULL, NULL);

-- ====== procAtividadeTrabalho ======
-- Ordem: operacao, id_funcionario_param, id_usuario_responsavel_param, titulo_param, descricao_param, quantidade_tarefas_param, horas_previstas_param, semana_referencia_param, status_param, data_conclusao_param, id_param
call procAtividadeTrabalho('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
call procAtividadeTrabalho('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);
call procAtividadeTrabalho('SELECT_BY_FUNCIONARIO', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ====== procApontamentoHoras ======
-- Ordem: operacao, id_funcionario_param, id_usuario_registro_param, semana_referencia_param, horas_trabalhadas_param, horas_extras_param, id_param
call procApontamentoHoras('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL);
call procApontamentoHoras('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, 1);
call procApontamentoHoras('SELECT_BY_FUNCIONARIO', 1, NULL, NULL, NULL, NULL, NULL);

-- ====== procMetaDepartamento ======
-- Ordem: operacao, id_meta_organizacional_param, id_departamento_param, id_param
call procMetaDepartamento('SELECT_ALL', NULL, NULL, NULL);
call procMetaDepartamento('SELECT_BY_ID', NULL, NULL, 1);
call procMetaDepartamento('SELECT_BY_DEPARTAMENTO', NULL, 1, NULL);

-- ====== procMetaProgresso ======
-- Ordem: operacao, id_meta_organizacional_param, id_usuario_responsavel_param, percentual_param, observacao_param, id_param
call procMetaProgresso('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
call procMetaProgresso('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
call procMetaProgresso('SELECT_BY_META_ORGANIZACIONAL', 1, NULL, NULL, NULL, NULL);
-- INSERT/UPDATE/DELETE bloqueados nesta versão. Utilize o fluxo especializado.

-- ====== procUsuarioEmail ======
-- Ordem: operacao, id_usuario_param, id_email_param, id_param
call procUsuarioEmail('SELECT_ALL', NULL, NULL, NULL);
call procUsuarioEmail('SELECT_BY_ID', NULL, NULL, 1);
call procUsuarioEmail('SELECT_BY_USUARIO', 1, NULL, NULL);

-- ====== procConfiguracaoIndicadores ======
-- Ordem: operacao, limite_sobrecarga_param, limite_baixo_desempenho_param, id_param
call procConfiguracaoIndicadores('SELECT_ALL', NULL, NULL, NULL);
call procConfiguracaoIndicadores('SELECT_BY_ID', NULL, NULL, 1);

-- ====== procIndicadorHistorico ======
-- Ordem: operacao, id_funcionario_param, semana_referencia_param, indice_sobrecarga_param, desempenho_medio_param, id_param
call procIndicadorHistorico('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
call procIndicadorHistorico('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
call procIndicadorHistorico('SELECT_BY_FUNCIONARIO', 1, NULL, NULL, NULL, NULL);
-- INSERT/UPDATE/DELETE bloqueados nesta versão. Utilize o fluxo especializado.

-- ====== procAuditoria ======
-- Ordem: operacao, id_usuario_param, entidade_param, id_registro_param, operacao_registro_param, dados_anteriores_param, dados_novos_param, id_param
call procAuditoria('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
call procAuditoria('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, NULL, 1);
call procAuditoria('SELECT_BY_USUARIO', 1, NULL, NULL, NULL, NULL, NULL, NULL);
-- INSERT/UPDATE/DELETE bloqueados nesta versão. Utilize o fluxo especializado.

-- ====== 02. PROCEDURES DE TELAS E CONSULTAS POR PERFIL ======
-- id_usuario=7: substitua por ID autorizado do banco.

-- ====== procAvaliacaoFluxo ======
-- Ordem: operacao, id_avaliacao_param, id_funcionario_param, id_avaliador_param, data_inicio_param, data_fim_param, prazo_param, observacao_param
call procAvaliacaoFluxo('SELECT_BY_ID', 1, NULL, NULL, NULL, NULL, NULL, NULL);
call procAvaliacaoFluxo('SELECT_COMPETENCIAS', 1, NULL, NULL, NULL, NULL, NULL, NULL);

-- ====== procDashboardColabore ======
-- Ordem: operacao, id_usuario_param
call procDashboardColabore('CARDS', 7);
call procDashboardColabore('DISTRIBUICAO_DESEMPENHO', 7);
call procDashboardColabore('DESTAQUES', 7);
call procDashboardColabore('SOBRECARGA_SETOR', 7);
call procDashboardColabore('ALERTAS', 7);

-- ====== procTelaAlertas ======
-- Ordem: operacao, id_usuario_param, busca_param, id_departamento_param, id_cargo_param, pagina_param, limite_param
call procTelaAlertas('SOBRECARGA', 7, NULL, NULL, NULL, 1, 20);
call procTelaAlertas('BAIXO_DESEMPENHO', 7, NULL, NULL, NULL, 1, 20);
call procTelaAlertas('AVALIACOES_PENDENTES', 7, NULL, NULL, NULL, 1, 20);

-- ====== procPerfilUsuarioTela ======
-- Ordem: operacao, id_usuario_param
call procPerfilUsuarioTela('DADOS', 7);
call procPerfilUsuarioTela('EMAILS', 7);
call procPerfilUsuarioTela('TELEFONES', 7);

-- ====== procTelaColaboradores ======
-- Ordem: operacao, id_usuario_param, busca_param, id_departamento_param, id_cargo_param, id_status_param, data_inicio_param, data_fim_param, pagina_param, limite_param
call procTelaColaboradores('LISTA', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
call procTelaColaboradores('CARDS', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
call procTelaColaboradores('SETORES', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
call procTelaColaboradores('FILTROS', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);

-- ====== procTelaColaboradorDetalhe ======
-- Ordem: operacao, id_usuario_param, id_funcionario_param
call procTelaColaboradorDetalhe('RESUMO', 7, 1);
call procTelaColaboradorDetalhe('COMPETENCIAS', 7, 1);
call procTelaColaboradorDetalhe('DISTRIBUICAO_COMPETENCIAS', 7, 1);
call procTelaColaboradorDetalhe('EVOLUCAO', 7, 1);
call procTelaColaboradorDetalhe('METAS', 7, 1);
call procTelaColaboradorDetalhe('AVALIACOES', 7, 1);

-- ====== procTelaMetas ======
-- Ordem: operacao, id_usuario_param, busca_param, id_departamento_param, id_funcionario_param, id_status_param, prazo_inicio_param, prazo_fim_param, pagina_param, limite_param
call procTelaMetas('LISTA', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
call procTelaMetas('CARDS', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
call procTelaMetas('HISTORICO', 7, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);

-- ====== procRelatoriosColabore ======
-- Ordem: operacao, id_usuario_param, data_inicio_param, data_fim_param, id_departamento_param, id_funcionario_param
call procRelatoriosColabore('COLABORADORES', 7, NULL, NULL, NULL, NULL);
call procRelatoriosColabore('DESEMPENHO', 7, NULL, NULL, NULL, NULL);
call procRelatoriosColabore('SOBRECARGA', 7, NULL, NULL, NULL, NULL);
call procRelatoriosColabore('METAS', 7, NULL, NULL, NULL, NULL);
call procRelatoriosColabore('PERFIL_EQUIPE', 7, NULL, NULL, NULL, NULL);
call procRelatoriosColabore('RESUMO_COLABORADORES', 7, NULL, NULL, NULL, NULL);

-- ====== procDadosIndicadoresBackend ======
-- Ordem: operacao, id_usuario_param, id_funcionario_param, id_departamento_param, data_inicio_param, data_fim_param
call procDadosIndicadoresBackend('COLABORADORES', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('AVALIACOES', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('NOTAS_COMPETENCIAS', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('ATIVIDADES', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('HORAS', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('METAS', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('PROGRESSO_METAS', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('JORNADA', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('COMPETENCIAS_VINCULADAS', 7, NULL, NULL, NULL, NULL);
call procDadosIndicadoresBackend('PARAMETROS', 7, NULL, NULL, NULL, NULL);

-- ====== 03. PROCEDURES DE ESCRITA (EXEMPLOS COMENTADOS) ======
-- Execute manualmente em ambiente de testes após confirmar os IDs.

-- Criar avaliação pendente: funcionário 1, avaliador 7 e período ilustrativo.
-- call procAvaliacaoFluxo('INSERT', NULL, 1, 7, '2026-10-01', '2026-10-31', '2026-11-05', 'Avaliação trimestral');
-- A procedure acima retorna o ID da nova avaliação. Use esse ID abaixo.
-- Registrar nota (somente em avaliação pendente e competência vinculada):
-- call procRegistrarNotaCompetencia(39, 1, 8.5, 'Boa entrega', 7);
-- Concluir após preencher TODAS as notas:
-- call procAvaliacaoFluxo('CONCLUIR', 39, NULL, 7, NULL, NULL, NULL, 'Avaliação concluída');
-- Registrar progresso de meta (0 a 100):
-- call procAtualizarProgressoMeta(1, 7, 80.00, 'Progresso atualizado');
-- Salvar indicador calculado pelo Node.js (não calculado no SQL):
-- call procSalvarIndicadorBackend(7, 1, '2026-10-26', 82.50, 8.80);

-- ====== 04. PROCEDURES LEGADAS / OPERAÇÕES PROTEGIDAS ======
-- procRegistrarSnapshotIndicadores(semana, id_usuario) SEMPRE lança erro.
-- call procRegistrarSnapshotIndicadores('2026-10-26', 7); -- LEGADO: ERRO INTENCIONAL
-- Substituição: procSalvarIndicadorBackend, com os cálculos feitos no Node.js.
-- procAvaliacao: INSERT, UPDATE e DELETE bloqueados.
-- procAvaliacaoCompetencia: INSERT, UPDATE e DELETE bloqueados.
-- procMetaProgresso: INSERT, UPDATE e DELETE bloqueados.
-- procIndicadorHistorico: INSERT, UPDATE e DELETE bloqueados.
-- procAuditoria: INSERT, UPDATE e DELETE bloqueados.
-- procConfiguracaoIndicadores: DELETE bloqueado.
-- Atenção: as procedures de relatórios legados podem retornar agregações SQL.
-- Para indicadores oficiais, use procDadosIndicadoresBackend e calcule na Service.

-- ====== 05. VERIFICAR PROCEDURES EXISTENTES ======
-- select routine_name from information_schema.routines where routine_schema='db_tcc_rh' and routine_type='PROCEDURE' order by routine_name;