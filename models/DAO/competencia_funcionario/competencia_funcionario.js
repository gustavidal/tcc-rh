/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de COMPETENCIA_FUNCIONARIO
 * Procedure: procCompetenciaFuncionario
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertCompetenciaFuncionario = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procCompetenciaFuncionario(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_competencia_param === undefined ? null : parametros.id_competencia_param, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateCompetenciaFuncionario = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procCompetenciaFuncionario(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_competencia_param === undefined ? null : parametros.id_competencia_param, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllCompetenciaFuncionario = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procCompetenciaFuncionario(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_competencia_param === undefined ? null : parametros.id_competencia_param, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdCompetenciaFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procCompetenciaFuncionario(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_competencia_param === undefined ? null : parametros.id_competencia_param, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteCompetenciaFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procCompetenciaFuncionario(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_competencia_param === undefined ? null : parametros.id_competencia_param, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertCompetenciaFuncionario, updateCompetenciaFuncionario, selectAllCompetenciaFuncionario, selectByIdCompetenciaFuncionario, deleteCompetenciaFuncionario }
