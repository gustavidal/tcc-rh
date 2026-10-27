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

-- ====== procTipoCompetencia: tbl_tipo_competencia ======
-- Ordem dos parâmetros: operacao, tipo, id_param
-- Consulta geral (sem modificar dados):
call procTipoCompetencia('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procTipoCompetencia('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procTipoCompetencia('INSERT', 'EXEMPLO', NULL);
-- call procTipoCompetencia('UPDATE', 'EXEMPLO', 1);
-- call procTipoCompetencia('DELETE', NULL, 1);

-- ====== procStatusCompetencia: tbl_status_competencia ======
-- Ordem dos parâmetros: operacao, status, id_param
-- Consulta geral (sem modificar dados):
call procStatusCompetencia('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procStatusCompetencia('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procStatusCompetencia('INSERT', 'EXEMPLO', NULL);
-- call procStatusCompetencia('UPDATE', 'EXEMPLO', 1);
-- call procStatusCompetencia('DELETE', NULL, 1);

-- ====== procTipoTelefone: tbl_tipo_telefone ======
-- Ordem dos parâmetros: operacao, tipo, id_param
-- Consulta geral (sem modificar dados):
call procTipoTelefone('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procTipoTelefone('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procTipoTelefone('INSERT', 'EXEMPLO', NULL);
-- call procTipoTelefone('UPDATE', 'EXEMPLO', 1);
-- call procTipoTelefone('DELETE', NULL, 1);

-- ====== procTipoEmail: tbl_tipo_email ======
-- Ordem dos parâmetros: operacao, tipo, id_param
-- Consulta geral (sem modificar dados):
call procTipoEmail('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procTipoEmail('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procTipoEmail('INSERT', 'EXEMPLO', NULL);
-- call procTipoEmail('UPDATE', 'EXEMPLO', 1);
-- call procTipoEmail('DELETE', NULL, 1);

-- ====== procStatusFuncionario: tbl_status_funcionario ======
-- Ordem dos parâmetros: operacao, status, id_param
-- Consulta geral (sem modificar dados):
call procStatusFuncionario('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procStatusFuncionario('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procStatusFuncionario('INSERT', 'EXEMPLO', NULL);
-- call procStatusFuncionario('UPDATE', 'EXEMPLO', 1);
-- call procStatusFuncionario('DELETE', NULL, 1);

-- ====== procStatusMeta: tbl_status_meta ======
-- Ordem dos parâmetros: operacao, status, id_param
-- Consulta geral (sem modificar dados):
call procStatusMeta('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procStatusMeta('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procStatusMeta('INSERT', 'EXEMPLO', NULL);
-- call procStatusMeta('UPDATE', 'EXEMPLO', 1);
-- call procStatusMeta('DELETE', NULL, 1);

-- ====== procSexo: tbl_sexo ======
-- Ordem dos parâmetros: operacao, sigla, sexo, id_param
-- Consulta geral (sem modificar dados):
call procSexo('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procSexo('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procSexo('INSERT', 'EXEMPLO', 'EXEMPLO', NULL);
-- call procSexo('UPDATE', 'EXEMPLO', 'EXEMPLO', 1);
-- call procSexo('DELETE', NULL, NULL, 1);

-- ====== procCargo: tbl_cargo ======
-- Ordem dos parâmetros: operacao, nome, id_param
-- Consulta geral (sem modificar dados):
call procCargo('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procCargo('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procCargo('INSERT', 'EXEMPLO', NULL);
-- call procCargo('UPDATE', 'EXEMPLO', 1);
-- call procCargo('DELETE', NULL, 1);

-- ====== procFuncao: tbl_funcao ======
-- Ordem dos parâmetros: operacao, nome, id_param
-- Consulta geral (sem modificar dados):
call procFuncao('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFuncao('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFuncao('INSERT', 'EXEMPLO', NULL);
-- call procFuncao('UPDATE', 'EXEMPLO', 1);
-- call procFuncao('DELETE', NULL, 1);

-- ====== procDepartamento: tbl_departamento ======
-- Ordem dos parâmetros: operacao, nome, id_param
-- Consulta geral (sem modificar dados):
call procDepartamento('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procDepartamento('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procDepartamento('INSERT', 'EXEMPLO', NULL);
-- call procDepartamento('UPDATE', 'EXEMPLO', 1);
-- call procDepartamento('DELETE', NULL, 1);

-- ====== procFotoFuncionario: tbl_foto_funcionario ======
-- Ordem dos parâmetros: operacao, foto, id_param
-- Consulta geral (sem modificar dados):
call procFotoFuncionario('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFotoFuncionario('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFotoFuncionario('INSERT', 'EXEMPLO', NULL);
-- call procFotoFuncionario('UPDATE', 'EXEMPLO', 1);
-- call procFotoFuncionario('DELETE', NULL, 1);

-- ====== procFotoUsuario: tbl_foto_usuario ======
-- Ordem dos parâmetros: operacao, foto, id_param
-- Consulta geral (sem modificar dados):
call procFotoUsuario('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFotoUsuario('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFotoUsuario('INSERT', 'EXEMPLO', NULL);
-- call procFotoUsuario('UPDATE', 'EXEMPLO', 1);
-- call procFotoUsuario('DELETE', NULL, 1);

-- ====== procTelefone: tbl_telefone ======
-- Ordem dos parâmetros: operacao, numero, id_tipo_telefone, id_param
-- Consulta geral (sem modificar dados):
call procTelefone('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procTelefone('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procTelefone('INSERT', 'EXEMPLO', 1, NULL);
-- call procTelefone('UPDATE', 'EXEMPLO', 1, 1);
-- call procTelefone('DELETE', NULL, NULL, 1);
-- call procTelefone('SELECT_BY_TIPO_TELEFONE', NULL, 1, NULL);

-- ====== procEmail: tbl_email ======
-- Ordem dos parâmetros: operacao, email, id_tipo_email, id_param
-- Consulta geral (sem modificar dados):
call procEmail('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procEmail('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procEmail('INSERT', 'EXEMPLO', 1, NULL);
-- call procEmail('UPDATE', 'EXEMPLO', 1, 1);
-- call procEmail('DELETE', NULL, NULL, 1);
-- call procEmail('SELECT_BY_TIPO_EMAIL', NULL, 1, NULL);
-- call procEmail('SELECT_BY_EMAIL', 'teste@exemplo.com', NULL, NULL);

-- ====== procUsuario: tbl_usuario ======
-- Ordem dos parâmetros: operacao, nome, data_nascimento, id_foto_usuario, id_param
-- Consulta geral (sem modificar dados):
call procUsuario('SELECT_ALL', NULL, NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procUsuario('SELECT_BY_ID', NULL, NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procUsuario('INSERT', 'EXEMPLO', '2026-01-01', 1, NULL);
-- call procUsuario('UPDATE', 'EXEMPLO', '2026-01-01', 1, 1);
-- call procUsuario('DELETE', NULL, NULL, NULL, 1);
-- call procUsuario('SELECT_BY_FOTO_USUARIO', NULL, NULL, 1, NULL);
-- call procUsuario('SELECT_BY_NOME', 'Ana', NULL, NULL, NULL);

-- ====== procUsuarioLogin: tbl_usuario_login ======
-- Ordem dos parâmetros: operacao, email_login, senha_hash, id_usuario, id_param
-- Consulta geral (sem modificar dados):
call procUsuarioLogin('SELECT_ALL', NULL, NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procUsuarioLogin('SELECT_BY_ID', NULL, NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procUsuarioLogin('INSERT', 'EXEMPLO', 'HASH_GERADO_NO_BACKEND', 1, NULL);
-- call procUsuarioLogin('UPDATE', 'EXEMPLO', 'HASH_GERADO_NO_BACKEND', 1, 1);
-- call procUsuarioLogin('DELETE', NULL, NULL, NULL, 1);
-- call procUsuarioLogin('SELECT_BY_USUARIO', NULL, NULL, 1, NULL);
-- call procUsuarioLogin('SELECT_BY_EMAIL_LOGIN', 'login@exemplo.com', NULL, NULL, NULL); -- retorno com hash: apenas autenticação

-- ====== procAdministrativo: tbl_administrativo ======
-- Ordem dos parâmetros: operacao, id_usuario, id_param
-- Consulta geral (sem modificar dados):
call procAdministrativo('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procAdministrativo('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procAdministrativo('INSERT', 1, NULL);
-- call procAdministrativo('UPDATE', 1, 1);
-- call procAdministrativo('DELETE', NULL, 1);
-- call procAdministrativo('SELECT_BY_USUARIO', 1, NULL);

-- ====== procGestor: tbl_gestor ======
-- Ordem dos parâmetros: operacao, id_usuario, id_param
-- Consulta geral (sem modificar dados):
call procGestor('SELECT_ALL', NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procGestor('SELECT_BY_ID', NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procGestor('INSERT', 1, NULL);
-- call procGestor('UPDATE', 1, 1);
-- call procGestor('DELETE', NULL, 1);
-- call procGestor('SELECT_BY_USUARIO', 1, NULL);

-- ====== procUsuarioTelefone: tbl_usuario_telefone ======
-- Ordem dos parâmetros: operacao, id_usuario, id_telefone, id_param
-- Consulta geral (sem modificar dados):
call procUsuarioTelefone('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procUsuarioTelefone('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procUsuarioTelefone('INSERT', 1, 1, NULL);
-- call procUsuarioTelefone('UPDATE', 1, 1, 1);
-- call procUsuarioTelefone('DELETE', NULL, NULL, 1);
-- call procUsuarioTelefone('SELECT_BY_USUARIO', 1, NULL, NULL);
-- call procUsuarioTelefone('SELECT_BY_TELEFONE', NULL, 1, NULL);

-- ====== procCompetencia: tbl_competencia ======
-- Ordem dos parâmetros: operacao, descricao, nivel_esperado, data_ultima_avaliacao, id_tipo_competencia, id_status_competencia, id_param
-- Consulta geral (sem modificar dados):
call procCompetencia('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procCompetencia('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procCompetencia('INSERT', 'EXEMPLO', 1.0, '2026-01-01', 1, 1, NULL);
-- call procCompetencia('UPDATE', 'EXEMPLO', 1.0, '2026-01-01', 1, 1, 1);
-- call procCompetencia('DELETE', NULL, NULL, NULL, NULL, NULL, 1);
-- call procCompetencia('SELECT_BY_TIPO_COMPETENCIA', NULL, NULL, NULL, 1, NULL, NULL);
-- call procCompetencia('SELECT_BY_STATUS_COMPETENCIA', NULL, NULL, NULL, NULL, 1, NULL);

-- ====== procMetaOrganizacional: tbl_meta_organizacional ======
-- Ordem dos parâmetros: operacao, titulo, prazo, descricao, id_status_meta, id_param
-- Consulta geral (sem modificar dados):
call procMetaOrganizacional('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procMetaOrganizacional('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procMetaOrganizacional('INSERT', 'EXEMPLO', '2026-01-01', 'EXEMPLO', 1, NULL);
-- call procMetaOrganizacional('UPDATE', 'EXEMPLO', '2026-01-01', 'EXEMPLO', 1, 1);
-- call procMetaOrganizacional('DELETE', NULL, NULL, NULL, NULL, 1);
-- call procMetaOrganizacional('SELECT_BY_STATUS_META', NULL, NULL, NULL, 1, NULL);

-- ====== procFuncionario: tbl_funcionario ======
-- Ordem dos parâmetros: operacao, nome_social, nome, cpf, data_contratacao, data_nascimento, numero_matricula, id_sexo, id_cargo, id_gestor, id_foto_funcionario, id_status_funcionario, id_departamento, id_param
-- Consulta geral (sem modificar dados):
call procFuncionario('SELECT_ALL', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFuncionario('SELECT_BY_ID', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFuncionario('INSERT', 'EXEMPLO', 'EXEMPLO', 'EXEMPLO', '2026-01-01', '2026-01-01', 1, 1, 1, 1, 1, 1, NULL, NULL);
-- call procFuncionario('UPDATE', 'EXEMPLO', 'EXEMPLO', 'EXEMPLO', '2026-01-01', '2026-01-01', 1, 1, 1, 1, 1, 1, NULL, 1);
-- call procFuncionario('DELETE', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);
-- call procFuncionario('SELECT_BY_SEXO', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_CARGO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_GESTOR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_FOTO_FUNCIONARIO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_STATUS_FUNCIONARIO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL);
-- call procFuncionario('SELECT_BY_CPF', NULL, NULL, '000.000.000-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_MATRICULA', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_NOME', NULL, 'Ana', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- call procFuncionario('SELECT_BY_DEPARTAMENTO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL);

-- ====== procAvaliacao: tbl_avaliacao ======
-- Ordem dos parâmetros: operacao, data_avaliacao, nota, observacao, id_funcionario, id_param
-- Consulta geral (sem modificar dados):
call procAvaliacao('SELECT_ALL', NULL, NULL, NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procAvaliacao('SELECT_BY_ID', NULL, NULL, NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procAvaliacao('INSERT', '2026-01-01 10:00:00', 1.0, 'EXEMPLO', 1, NULL);
-- call procAvaliacao('UPDATE', '2026-01-01 10:00:00', 1.0, 'EXEMPLO', 1, 1);
-- call procAvaliacao('DELETE', NULL, NULL, NULL, NULL, 1);
-- call procAvaliacao('SELECT_BY_FUNCIONARIO', NULL, NULL, NULL, 1, NULL);

-- ====== procFuncaoFuncionario: tbl_funcao_funcionario ======
-- Ordem dos parâmetros: operacao, id_funcao, id_funcionario, id_param
-- Consulta geral (sem modificar dados):
call procFuncaoFuncionario('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFuncaoFuncionario('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFuncaoFuncionario('INSERT', 1, 1, NULL);
-- call procFuncaoFuncionario('UPDATE', 1, 1, 1);
-- call procFuncaoFuncionario('DELETE', NULL, NULL, 1);
-- call procFuncaoFuncionario('SELECT_BY_FUNCAO', 1, NULL, NULL);
-- call procFuncaoFuncionario('SELECT_BY_FUNCIONARIO', NULL, 1, NULL);

-- ====== procCompetenciaFuncionario: tbl_competencia_funcionario ======
-- Ordem dos parâmetros: operacao, id_competencia, id_funcionario, id_param
-- Consulta geral (sem modificar dados):
call procCompetenciaFuncionario('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procCompetenciaFuncionario('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procCompetenciaFuncionario('INSERT', 1, 1, NULL);
-- call procCompetenciaFuncionario('UPDATE', 1, 1, 1);
-- call procCompetenciaFuncionario('DELETE', NULL, NULL, 1);
-- call procCompetenciaFuncionario('SELECT_BY_COMPETENCIA', 1, NULL, NULL);
-- call procCompetenciaFuncionario('SELECT_BY_FUNCIONARIO', NULL, 1, NULL);

-- ====== procMetaOrganizacionalFuncionario: tbl_meta_organizacional_funcionario ======
-- Ordem dos parâmetros: operacao, id_meta_organizacional, id_funcionario, id_param
-- Consulta geral (sem modificar dados):
call procMetaOrganizacionalFuncionario('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procMetaOrganizacionalFuncionario('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procMetaOrganizacionalFuncionario('INSERT', 1, 1, NULL);
-- call procMetaOrganizacionalFuncionario('UPDATE', 1, 1, 1);
-- call procMetaOrganizacionalFuncionario('DELETE', NULL, NULL, 1);
-- call procMetaOrganizacionalFuncionario('SELECT_BY_META_ORGANIZACIONAL', 1, NULL, NULL);
-- call procMetaOrganizacionalFuncionario('SELECT_BY_FUNCIONARIO', NULL, 1, NULL);

-- ====== procFuncionarioDepartamento: tbl_funcionario_departamento ======
-- Ordem dos parâmetros: operacao, id_funcionario, id_departamento, id_param
-- Consulta geral (sem modificar dados):
call procFuncionarioDepartamento('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFuncionarioDepartamento('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFuncionarioDepartamento('INSERT', 1, 1, NULL);
-- call procFuncionarioDepartamento('UPDATE', 1, 1, 1);
-- call procFuncionarioDepartamento('DELETE', NULL, NULL, 1);
-- call procFuncionarioDepartamento('SELECT_BY_FUNCIONARIO', 1, NULL, NULL);
-- call procFuncionarioDepartamento('SELECT_BY_DEPARTAMENTO', NULL, 1, NULL);

-- ====== procFuncionarioTelefone: tbl_funcionario_telefone ======
-- Ordem dos parâmetros: operacao, id_funcionario, id_telefone, id_param
-- Consulta geral (sem modificar dados):
call procFuncionarioTelefone('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFuncionarioTelefone('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFuncionarioTelefone('INSERT', 1, 1, NULL);
-- call procFuncionarioTelefone('UPDATE', 1, 1, 1);
-- call procFuncionarioTelefone('DELETE', NULL, NULL, 1);
-- call procFuncionarioTelefone('SELECT_BY_FUNCIONARIO', 1, NULL, NULL);
-- call procFuncionarioTelefone('SELECT_BY_TELEFONE', NULL, 1, NULL);

-- ====== procFuncionarioEmail: tbl_funcionario_email ======
-- Ordem dos parâmetros: operacao, id_funcionario, id_email, id_param
-- Consulta geral (sem modificar dados):
call procFuncionarioEmail('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procFuncionarioEmail('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procFuncionarioEmail('INSERT', 1, 1, NULL);
-- call procFuncionarioEmail('UPDATE', 1, 1, 1);
-- call procFuncionarioEmail('DELETE', NULL, NULL, 1);
-- call procFuncionarioEmail('SELECT_BY_FUNCIONARIO', 1, NULL, NULL);
-- call procFuncionarioEmail('SELECT_BY_EMAIL', NULL, 1, NULL);

-- ====== procDepartamentoTelefone: tbl_departamento_telefone ======
-- Ordem dos parâmetros: operacao, id_departamento, id_telefone, id_param
-- Consulta geral (sem modificar dados):
call procDepartamentoTelefone('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procDepartamentoTelefone('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procDepartamentoTelefone('INSERT', 1, 1, NULL);
-- call procDepartamentoTelefone('UPDATE', 1, 1, 1);
-- call procDepartamentoTelefone('DELETE', NULL, NULL, 1);
-- call procDepartamentoTelefone('SELECT_BY_DEPARTAMENTO', 1, NULL, NULL);
-- call procDepartamentoTelefone('SELECT_BY_TELEFONE', NULL, 1, NULL);

-- ====== procDepartamentoEmail: tbl_departamento_email ======
-- Ordem dos parâmetros: operacao, id_departamento, id_email, id_param
-- Consulta geral (sem modificar dados):
call procDepartamentoEmail('SELECT_ALL', NULL, NULL, NULL);
-- Consulta por ID: (ID = 1 é exemplo, ajuste para um ID existente)
call procDepartamentoEmail('SELECT_BY_ID', NULL, NULL, 1);
-- INSERT, UPDATE e DELETE: EXEMPLOS COMENTADOS. AJUSTE OS CAMPOS ANTES DE EXECUTAR.
-- call procDepartamentoEmail('INSERT', 1, 1, NULL);
-- call procDepartamentoEmail('UPDATE', 1, 1, 1);
-- call procDepartamentoEmail('DELETE', NULL, NULL, 1);
-- call procDepartamentoEmail('SELECT_BY_DEPARTAMENTO', 1, NULL, NULL);
-- call procDepartamentoEmail('SELECT_BY_EMAIL', NULL, 1, NULL);


-- ====== procAvaliacaoCompetencia ======
-- Parâmetros: operacao, id_avaliacao_param, id_competencia_param, nota_param, observacao_param, id_param
-- EXEMPLO DE CONSULTA
-- call procAvaliacaoCompetencia('SELECT_ALL', 1, 1, NULL, NULL, 1);

-- ====== procJornadaFuncionario ======
-- Parâmetros: operacao, id_funcionario_param, horas_semanais_param, vigente_desde_param, id_param
-- EXEMPLO DE CONSULTA
-- call procJornadaFuncionario('SELECT_ALL', 1, NULL, NULL, 1);

-- ====== procAtividadeTrabalho ======
-- Parâmetros: operacao, id_funcionario_param, id_usuario_responsavel_param, titulo_param, descricao_param, quantidade_tarefas_param, horas_previstas_param, semana_referencia_param, status_param, data_conclusao_param, id_param
-- EXEMPLO DE CONSULTA
-- call procAtividadeTrabalho('SELECT_ALL', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- ====== procApontamentoHoras ======
-- Parâmetros: operacao, id_funcionario_param, id_usuario_registro_param, semana_referencia_param, horas_trabalhadas_param, horas_extras_param, id_param
-- EXEMPLO DE CONSULTA
-- call procApontamentoHoras('SELECT_ALL', 1, 1, NULL, NULL, NULL, 1);

-- ====== procMetaDepartamento ======
-- Parâmetros: operacao, id_meta_organizacional_param, id_departamento_param, id_param
-- EXEMPLO DE CONSULTA
-- call procMetaDepartamento('SELECT_ALL', 1, 1, 1);

-- ====== procMetaProgresso ======
-- Parâmetros: operacao, id_meta_organizacional_param, id_usuario_responsavel_param, percentual_param, observacao_param, id_param
-- EXEMPLO DE CONSULTA
-- call procMetaProgresso('SELECT_ALL', 1, 1, NULL, NULL, 1);

-- ====== procUsuarioEmail ======
-- Parâmetros: operacao, id_usuario_param, id_email_param, id_param
-- EXEMPLO DE CONSULTA
-- call procUsuarioEmail('SELECT_ALL', 1, 1, 1);

-- ====== procConfiguracaoIndicadores ======
-- Parâmetros: operacao, limite_sobrecarga_param, limite_baixo_desempenho_param, id_param
-- EXEMPLO DE CONSULTA
-- call procConfiguracaoIndicadores('SELECT_ALL', NULL, NULL, 1);

-- ====== procIndicadorHistorico ======
-- Parâmetros: operacao, id_funcionario_param, semana_referencia_param, indice_sobrecarga_param, desempenho_medio_param, id_param
-- EXEMPLO DE CONSULTA
-- call procIndicadorHistorico('SELECT_ALL', 1, NULL, NULL, NULL, 1);

-- ====== procAuditoria ======
-- Parâmetros: operacao, id_usuario_param, entidade_param, id_registro_param, operacao_registro_param, dados_anteriores_param, dados_novos_param, id_param
-- EXEMPLO DE CONSULTA
-- call procAuditoria('SELECT_ALL', 1, NULL, 1, NULL, NULL, NULL, 1);

-- ====== procAvaliacaoFluxo ======
-- Parâmetros: operacao, id_avaliacao_param, id_funcionario_param, id_avaliador_param, data_inicio_param, data_fim_param, prazo_param, observacao_param
-- EXEMPLO DE CONSULTA
-- call procAvaliacaoFluxo('SELECT_BY_ID', 1, 1, 1, NULL, NULL, NULL, NULL);

-- ====== procRegistrarNotaCompetencia ======
-- Parâmetros: id_avaliacao_param, id_competencia_param, nota_param, observacao_param, id_usuario_param
-- CHAMADA DE ALTERAÇÃO; EXECUTE SÓ COM IDs REAIS
-- call procRegistrarNotaCompetencia(1, 1, NULL, NULL, 1);

-- ====== procAtualizarProgressoMeta ======
-- Parâmetros: id_meta_param, id_usuario_param, percentual_param, observacao_param
-- CHAMADA DE ALTERAÇÃO; EXECUTE SÓ COM IDs REAIS
-- call procAtualizarProgressoMeta(1, 1, NULL, NULL);

-- ====== procRegistrarSnapshotIndicadores ======
-- Parâmetros: semana_param, id_usuario_param
-- CHAMADA DE ALTERAÇÃO; EXECUTE SÓ COM IDs REAIS
-- call procRegistrarSnapshotIndicadores(NULL, 1);

-- ====== procDashboardColabore ======
-- Parâmetros: operacao, id_usuario_param
-- EXEMPLO DE CONSULTA
-- call procDashboardColabore('CARDS', 1);

-- ====== procTelaAlertas ======
-- Parâmetros: operacao, id_usuario_param, busca_param, id_departamento_param, id_cargo_param, pagina_param, limite_param
-- EXEMPLO DE CONSULTA
-- call procTelaAlertas('SOBRECARGA', 1, NULL, 1, 1, NULL, NULL);

-- ====== procPerfilUsuarioTela ======
-- Parâmetros: operacao, id_usuario_param
-- EXEMPLO DE CONSULTA
-- call procPerfilUsuarioTela('DADOS', 1);

-- ====== procTelaColaboradores ======
-- Parâmetros: operacao, id_usuario_param, busca_param, id_departamento_param, id_cargo_param, id_status_param, data_inicio_param, data_fim_param, pagina_param, limite_param
-- EXEMPLO DE CONSULTA
-- call procTelaColaboradores('LISTA', 1, NULL, 1, 1, 1, NULL, NULL, NULL, NULL);

-- ====== procTelaColaboradorDetalhe ======
-- Parâmetros: operacao, id_usuario_param, id_funcionario_param
-- EXEMPLO DE CONSULTA
-- call procTelaColaboradorDetalhe('RESUMO', 1, 1);

-- ====== procTelaMetas ======
-- Parâmetros: operacao, id_usuario_param, busca_param, id_departamento_param, id_funcionario_param, id_status_param, prazo_inicio_param, prazo_fim_param, pagina_param, limite_param
-- EXEMPLO DE CONSULTA
-- call procTelaMetas('LISTA', 1, NULL, 1, 1, 1, NULL, NULL, NULL, NULL);

-- ====== procRelatoriosColabore ======
-- Parâmetros: operacao, id_usuario_param, data_inicio_param, data_fim_param, id_departamento_param, id_funcionario_param
-- EXEMPLO DE CONSULTA
-- call procRelatoriosColabore('DESEMPENHO', 1, NULL, NULL, 1, 1);

-- ====== CHAMADAS POR TELA (exemplos, IDs são ilustrativos) ======
-- Pág. 1: login (retorna hash SOMENTE para verificação interna bcrypt)
-- call procUsuarioLogin('SELECT_BY_EMAIL_LOGIN', 'rh@empresa.com', NULL, NULL, NULL);
-- Pág. 2: dashboard resumo, desempenho, alertas, destaques
-- call procDashboardColabore('CARDS', 1);
-- call procDashboardColabore('SOBRECARGA_SETOR', 1);
-- call procDashboardColabore('DISTRIBUICAO_DESEMPENHO', 1);
-- call procDashboardColabore('ALERTAS', 1);
-- Pág. 3: sobrecarga
-- call procTelaAlertas('SOBRECARGA', 1, NULL, NULL, NULL, 1, 20);
-- Pág. 4: baixo desempenho
-- call procTelaAlertas('BAIXO_DESEMPENHO', 1, NULL, NULL, NULL, 1, 20);
-- Pág. 5: avaliações pendentes
-- call procTelaAlertas('AVALIACOES_PENDENTES', 1, NULL, NULL, NULL, 1, 20);
-- Pág. 6–9: perfil / contatos
-- call procPerfilUsuarioTela('DADOS', 1);
-- call procPerfilUsuarioTela('EMAILS', 1);
-- call procPerfilUsuarioTela('TELEFONES', 1);
-- Pág. 10–15: lista de colaboradores + cards
-- call procTelaColaboradores('LISTA', 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
-- call procTelaColaboradores('CARDS', 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
-- Pág. 11 e 17: resumo individual / gráfico histórico
-- call procTelaColaboradorDetalhe('RESUMO', 1, 1);
-- call procTelaColaboradorDetalhe('EVOLUCAO', 1, 1);
-- call procTelaColaboradorDetalhe('COMPETENCIAS', 1, 1);
-- Pág. 16: avaliação
-- call procAvaliacaoFluxo('SELECT_BY_ID', 1, NULL, NULL, NULL, NULL, NULL, NULL);
-- call procAvaliacaoFluxo('SELECT_COMPETENCIAS', 1, NULL, NULL, NULL, NULL, NULL, NULL);
-- Pág. 18: metas
-- call procTelaMetas('LISTA', 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
-- call procTelaMetas('CARDS', 1, NULL, NULL, NULL, NULL, NULL, NULL, 1, 20);
-- Pág. 19–24: relatórios com filtros
-- call procRelatoriosColabore('DESEMPENHO', 1, NULL, NULL, NULL, NULL);
-- call procRelatoriosColabore('SOBRECARGA', 1, NULL, NULL, NULL, NULL);
-- call procRelatoriosColabore('METAS', 1, NULL, NULL, NULL, NULL);
-- call procRelatoriosColabore('COLABORADORES', 1, NULL, NULL, NULL, NULL);
-- call procRelatoriosColabore('PERFIL_EQUIPE', 1, NULL, NULL, NULL, NULL);
-- Pág. 16: transações de avaliação (requer ids e estado prévio)
-- call procAvaliacaoFluxo('INSERT', NULL, 1, 1, '2026-10-01', '2026-10-31', '2026-11-05', NULL);
-- call procRegistrarNotaCompetencia(1, 1, 8.0, 'Bom resultado', 1);
-- call procAvaliacaoFluxo('CONCLUIR', 1, NULL, 1, NULL, NULL, NULL, 'Concluída');
-- Pág. 18: progresso histórico de metas
-- call procAtualizarProgressoMeta(1,1,80,'Progresso registrado');
-- Snapshot semanal deve ser agendado pela API/job, NÃO é evento autônomo:
-- call procRegistrarSnapshotIndicadores('2026-10-26',1);

-- ====== NOVO CONTRATO BACKEND - DADOS BRUTOS ======
-- Rodar somente SELECTS (nenhuma alteração). Usuário 1 deve possuir perfil RH/gestor.
call procDadosIndicadoresBackend('COLABORADORES', 1, null, null, null, null);
call procDadosIndicadoresBackend('AVALIACOES', 1, null, null, null, null);
call procDadosIndicadoresBackend('NOTAS_COMPETENCIAS', 1, null, null, null, null);
call procDadosIndicadoresBackend('ATIVIDADES', 1, null, null, null, null);
call procDadosIndicadoresBackend('HORAS', 1, null, null, null, null);
call procDadosIndicadoresBackend('METAS', 1, null, null, null, null);
call procDadosIndicadoresBackend('PROGRESSO_METAS', 1, null, null, null, null);
call procDadosIndicadoresBackend('PARAMETROS', 1, null, null, null, null);
