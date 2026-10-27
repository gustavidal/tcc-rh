const knexConection = require('../models/global_knex/global_knex.js')
const contratos = {
  "procTipoCompetencia": [
    "operacao",
    "tipo_param",
    "id_param"
  ],
  "procStatusCompetencia": [
    "operacao",
    "status_param",
    "id_param"
  ],
  "procTipoTelefone": [
    "operacao",
    "tipo_param",
    "id_param"
  ],
  "procTipoEmail": [
    "operacao",
    "tipo_param",
    "id_param"
  ],
  "procStatusFuncionario": [
    "operacao",
    "status_param",
    "id_param"
  ],
  "procStatusMeta": [
    "operacao",
    "status_param",
    "id_param"
  ],
  "procSexo": [
    "operacao",
    "sigla_param",
    "sexo_param",
    "id_param"
  ],
  "procCargo": [
    "operacao",
    "nome_param",
    "id_param"
  ],
  "procFuncao": [
    "operacao",
    "nome_param",
    "id_param"
  ],
  "procDepartamento": [
    "operacao",
    "nome_param",
    "id_param"
  ],
  "procFotoFuncionario": [
    "operacao",
    "foto_param",
    "id_param"
  ],
  "procFotoUsuario": [
    "operacao",
    "foto_param",
    "id_param"
  ],
  "procTelefone": [
    "operacao",
    "numero_param",
    "id_tipo_telefone_param",
    "id_param"
  ],
  "procEmail": [
    "operacao",
    "email_param",
    "id_tipo_email_param",
    "id_param"
  ],
  "procUsuario": [
    "operacao",
    "nome_param",
    "data_nascimento_param",
    "id_foto_usuario_param",
    "id_param"
  ],
  "procUsuarioLogin": [
    "operacao",
    "email_login_param",
    "senha_hash_param",
    "id_usuario_param",
    "id_param"
  ],
  "procAdministrativo": [
    "operacao",
    "id_usuario_param",
    "id_param"
  ],
  "procGestor": [
    "operacao",
    "id_usuario_param",
    "id_param"
  ],
  "procUsuarioTelefone": [
    "operacao",
    "id_usuario_param",
    "id_telefone_param",
    "id_param"
  ],
  "procCompetencia": [
    "operacao",
    "descricao_param",
    "nivel_esperado_param",
    "data_ultima_avaliacao_param",
    "id_tipo_competencia_param",
    "id_status_competencia_param",
    "id_param"
  ],
  "procMetaOrganizacional": [
    "operacao",
    "titulo_param",
    "prazo_param",
    "descricao_param",
    "id_status_meta_param",
    "id_param"
  ],
  "procFuncionario": [
    "operacao",
    "nome_social_param",
    "nome_param",
    "cpf_param",
    "data_contratacao_param",
    "data_nascimento_param",
    "numero_matricula_param",
    "id_sexo_param",
    "id_cargo_param",
    "id_gestor_param",
    "id_foto_funcionario_param",
    "id_status_funcionario_param",
    "id_departamento_param",
    "id_param"
  ],
  "procAvaliacao": [
    "operacao",
    "data_avaliacao_param",
    "nota_param",
    "observacao_param",
    "id_funcionario_param",
    "id_param"
  ],
  "procFuncaoFuncionario": [
    "operacao",
    "id_funcao_param",
    "id_funcionario_param",
    "id_param"
  ],
  "procCompetenciaFuncionario": [
    "operacao",
    "id_competencia_param",
    "id_funcionario_param",
    "id_param"
  ],
  "procMetaOrganizacionalFuncionario": [
    "operacao",
    "id_meta_organizacional_param",
    "id_funcionario_param",
    "id_param"
  ],
  "procFuncionarioDepartamento": [
    "operacao",
    "id_funcionario_param",
    "id_departamento_param",
    "id_param"
  ],
  "procFuncionarioTelefone": [
    "operacao",
    "id_funcionario_param",
    "id_telefone_param",
    "id_param"
  ],
  "procFuncionarioEmail": [
    "operacao",
    "id_funcionario_param",
    "id_email_param",
    "id_param"
  ],
  "procDepartamentoTelefone": [
    "operacao",
    "id_departamento_param",
    "id_telefone_param",
    "id_param"
  ],
  "procDepartamentoEmail": [
    "operacao",
    "id_departamento_param",
    "id_email_param",
    "id_param"
  ],
  "procAvaliacaoCompetencia": [
    "operacao",
    "id_avaliacao_param",
    "id_competencia_param",
    "nota_param",
    "observacao_param",
    "id_param"
  ],
  "procJornadaFuncionario": [
    "operacao",
    "id_funcionario_param",
    "horas_semanais_param",
    "vigente_desde_param",
    "id_param"
  ],
  "procAtividadeTrabalho": [
    "operacao",
    "id_funcionario_param",
    "id_usuario_responsavel_param",
    "titulo_param",
    "descricao_param",
    "quantidade_tarefas_param",
    "horas_previstas_param",
    "semana_referencia_param",
    "status_param",
    "data_conclusao_param",
    "id_param"
  ],
  "procApontamentoHoras": [
    "operacao",
    "id_funcionario_param",
    "id_usuario_registro_param",
    "semana_referencia_param",
    "horas_trabalhadas_param",
    "horas_extras_param",
    "id_param"
  ],
  "procMetaDepartamento": [
    "operacao",
    "id_meta_organizacional_param",
    "id_departamento_param",
    "id_param"
  ],
  "procMetaProgresso": [
    "operacao",
    "id_meta_organizacional_param",
    "id_usuario_responsavel_param",
    "percentual_param",
    "observacao_param",
    "id_param"
  ],
  "procUsuarioEmail": [
    "operacao",
    "id_usuario_param",
    "id_email_param",
    "id_param"
  ],
  "procConfiguracaoIndicadores": [
    "operacao",
    "limite_sobrecarga_param",
    "limite_baixo_desempenho_param",
    "id_param"
  ],
  "procIndicadorHistorico": [
    "operacao",
    "id_funcionario_param",
    "semana_referencia_param",
    "indice_sobrecarga_param",
    "desempenho_medio_param",
    "id_param"
  ],
  "procAuditoria": [
    "operacao",
    "id_usuario_param",
    "entidade_param",
    "id_registro_param",
    "operacao_registro_param",
    "dados_anteriores_param",
    "dados_novos_param",
    "id_param"
  ],
  "procAvaliacaoFluxo": [
    "operacao",
    "id_avaliacao_param",
    "id_funcionario_param",
    "id_avaliador_param",
    "data_inicio_param",
    "data_fim_param",
    "prazo_param",
    "observacao_param"
  ],
  "procRegistrarNotaCompetencia": [
    "id_avaliacao_param",
    "id_competencia_param",
    "nota_param",
    "observacao_param",
    "id_usuario_param"
  ],
  "procAtualizarProgressoMeta": [
    "id_meta_param",
    "id_usuario_param",
    "percentual_param",
    "observacao_param"
  ],
  "procRegistrarSnapshotIndicadores": [
    "semana_param",
    "id_usuario_param"
  ],
  "procDashboardColabore": [
    "operacao",
    "id_usuario_param"
  ],
  "procTelaAlertas": [
    "operacao",
    "id_usuario_param",
    "busca_param",
    "id_departamento_param",
    "id_cargo_param",
    "pagina_param",
    "limite_param"
  ],
  "procPerfilUsuarioTela": [
    "operacao",
    "id_usuario_param"
  ],
  "procTelaColaboradores": [
    "operacao",
    "id_usuario_param",
    "busca_param",
    "id_departamento_param",
    "id_cargo_param",
    "id_status_param",
    "data_inicio_param",
    "data_fim_param",
    "pagina_param",
    "limite_param"
  ],
  "procTelaColaboradorDetalhe": [
    "operacao",
    "id_usuario_param",
    "id_funcionario_param"
  ],
  "procTelaMetas": [
    "operacao",
    "id_usuario_param",
    "busca_param",
    "id_departamento_param",
    "id_funcionario_param",
    "id_status_param",
    "prazo_inicio_param",
    "prazo_fim_param",
    "pagina_param",
    "limite_param"
  ],
  "procRelatoriosColabore": [
    "operacao",
    "id_usuario_param",
    "data_inicio_param",
    "data_fim_param",
    "id_departamento_param",
    "id_funcionario_param"
  ],
  "procDadosIndicadoresBackend": [
    "operacao",
    "id_usuario_param",
    "id_funcionario_param",
    "id_departamento_param",
    "data_inicio_param",
    "data_fim_param"
  ],
  "procSalvarIndicadorBackend": [
    "id_usuario_param",
    "id_funcionario_param",
    "semana_param",
    "indice_sobrecarga_param",
    "desempenho_medio_param"
  ]
}
const executar = async function (nome, dados = {}, transaction = null) {
    const contrato = contratos[nome]
    if (!contrato) throw new Error('Procedure não cadastrada')
    const sql = `call ${nome}(${contrato.map(() => '?').join(', ')});`
    const valores = contrato.map(parametro => dados[parametro] === undefined ? null : dados[parametro])
    const result = await (transaction || knexConection).raw(sql, valores)
    if (Array.isArray(result[0]) && Array.isArray(result[0][0])) return result[0][0]
    return result[0]
}
module.exports = { executar, knexConection }
