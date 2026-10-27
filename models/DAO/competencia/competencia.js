/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de COMPETENCIA
 * Procedure: procCompetencia
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertCompetencia = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procCompetencia(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.nivel_esperado_param === undefined ? null : parametros.nivel_esperado_param, parametros.data_ultima_avaliacao_param === undefined ? null : parametros.data_ultima_avaliacao_param, parametros.id_tipo_competencia_param === undefined ? null : parametros.id_tipo_competencia_param, parametros.id_status_competencia_param === undefined ? null : parametros.id_status_competencia_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateCompetencia = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procCompetencia(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.nivel_esperado_param === undefined ? null : parametros.nivel_esperado_param, parametros.data_ultima_avaliacao_param === undefined ? null : parametros.data_ultima_avaliacao_param, parametros.id_tipo_competencia_param === undefined ? null : parametros.id_tipo_competencia_param, parametros.id_status_competencia_param === undefined ? null : parametros.id_status_competencia_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllCompetencia = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procCompetencia(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.nivel_esperado_param === undefined ? null : parametros.nivel_esperado_param, parametros.data_ultima_avaliacao_param === undefined ? null : parametros.data_ultima_avaliacao_param, parametros.id_tipo_competencia_param === undefined ? null : parametros.id_tipo_competencia_param, parametros.id_status_competencia_param === undefined ? null : parametros.id_status_competencia_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdCompetencia = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procCompetencia(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.nivel_esperado_param === undefined ? null : parametros.nivel_esperado_param, parametros.data_ultima_avaliacao_param === undefined ? null : parametros.data_ultima_avaliacao_param, parametros.id_tipo_competencia_param === undefined ? null : parametros.id_tipo_competencia_param, parametros.id_status_competencia_param === undefined ? null : parametros.id_status_competencia_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteCompetencia = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procCompetencia(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.nivel_esperado_param === undefined ? null : parametros.nivel_esperado_param, parametros.data_ultima_avaliacao_param === undefined ? null : parametros.data_ultima_avaliacao_param, parametros.id_tipo_competencia_param === undefined ? null : parametros.id_tipo_competencia_param, parametros.id_status_competencia_param === undefined ? null : parametros.id_status_competencia_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertCompetencia, updateCompetencia, selectAllCompetencia, selectByIdCompetencia, deleteCompetencia }
