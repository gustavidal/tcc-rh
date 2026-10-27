/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de FUNCIONARIO
 * Procedure: procFuncionario
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertFuncionario = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procFuncionario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_social_param === undefined ? null : parametros.nome_social_param, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.cpf_param === undefined ? null : parametros.cpf_param, parametros.data_contratacao_param === undefined ? null : parametros.data_contratacao_param, parametros.data_nascimento_param === undefined ? null : parametros.data_nascimento_param, parametros.numero_matricula_param === undefined ? null : parametros.numero_matricula_param, parametros.id_sexo_param === undefined ? null : parametros.id_sexo_param, parametros.id_cargo_param === undefined ? null : parametros.id_cargo_param, parametros.id_gestor_param === undefined ? null : parametros.id_gestor_param, parametros.id_foto_funcionario_param === undefined ? null : parametros.id_foto_funcionario_param, parametros.id_status_funcionario_param === undefined ? null : parametros.id_status_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateFuncionario = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procFuncionario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_social_param === undefined ? null : parametros.nome_social_param, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.cpf_param === undefined ? null : parametros.cpf_param, parametros.data_contratacao_param === undefined ? null : parametros.data_contratacao_param, parametros.data_nascimento_param === undefined ? null : parametros.data_nascimento_param, parametros.numero_matricula_param === undefined ? null : parametros.numero_matricula_param, parametros.id_sexo_param === undefined ? null : parametros.id_sexo_param, parametros.id_cargo_param === undefined ? null : parametros.id_cargo_param, parametros.id_gestor_param === undefined ? null : parametros.id_gestor_param, parametros.id_foto_funcionario_param === undefined ? null : parametros.id_foto_funcionario_param, parametros.id_status_funcionario_param === undefined ? null : parametros.id_status_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllFuncionario = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procFuncionario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_social_param === undefined ? null : parametros.nome_social_param, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.cpf_param === undefined ? null : parametros.cpf_param, parametros.data_contratacao_param === undefined ? null : parametros.data_contratacao_param, parametros.data_nascimento_param === undefined ? null : parametros.data_nascimento_param, parametros.numero_matricula_param === undefined ? null : parametros.numero_matricula_param, parametros.id_sexo_param === undefined ? null : parametros.id_sexo_param, parametros.id_cargo_param === undefined ? null : parametros.id_cargo_param, parametros.id_gestor_param === undefined ? null : parametros.id_gestor_param, parametros.id_foto_funcionario_param === undefined ? null : parametros.id_foto_funcionario_param, parametros.id_status_funcionario_param === undefined ? null : parametros.id_status_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procFuncionario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_social_param === undefined ? null : parametros.nome_social_param, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.cpf_param === undefined ? null : parametros.cpf_param, parametros.data_contratacao_param === undefined ? null : parametros.data_contratacao_param, parametros.data_nascimento_param === undefined ? null : parametros.data_nascimento_param, parametros.numero_matricula_param === undefined ? null : parametros.numero_matricula_param, parametros.id_sexo_param === undefined ? null : parametros.id_sexo_param, parametros.id_cargo_param === undefined ? null : parametros.id_cargo_param, parametros.id_gestor_param === undefined ? null : parametros.id_gestor_param, parametros.id_foto_funcionario_param === undefined ? null : parametros.id_foto_funcionario_param, parametros.id_status_funcionario_param === undefined ? null : parametros.id_status_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procFuncionario(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_social_param === undefined ? null : parametros.nome_social_param, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.cpf_param === undefined ? null : parametros.cpf_param, parametros.data_contratacao_param === undefined ? null : parametros.data_contratacao_param, parametros.data_nascimento_param === undefined ? null : parametros.data_nascimento_param, parametros.numero_matricula_param === undefined ? null : parametros.numero_matricula_param, parametros.id_sexo_param === undefined ? null : parametros.id_sexo_param, parametros.id_cargo_param === undefined ? null : parametros.id_cargo_param, parametros.id_gestor_param === undefined ? null : parametros.id_gestor_param, parametros.id_foto_funcionario_param === undefined ? null : parametros.id_foto_funcionario_param, parametros.id_status_funcionario_param === undefined ? null : parametros.id_status_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertFuncionario, updateFuncionario, selectAllFuncionario, selectByIdFuncionario, deleteFuncionario }
