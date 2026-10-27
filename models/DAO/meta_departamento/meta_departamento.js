/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de META_DEPARTAMENTO
 * Procedure: procMetaDepartamento
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertMetaDepartamento = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procMetaDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_meta_organizacional_param === undefined ? null : parametros.id_meta_organizacional_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateMetaDepartamento = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procMetaDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_meta_organizacional_param === undefined ? null : parametros.id_meta_organizacional_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllMetaDepartamento = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procMetaDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_meta_organizacional_param === undefined ? null : parametros.id_meta_organizacional_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdMetaDepartamento = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procMetaDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_meta_organizacional_param === undefined ? null : parametros.id_meta_organizacional_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteMetaDepartamento = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procMetaDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_meta_organizacional_param === undefined ? null : parametros.id_meta_organizacional_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertMetaDepartamento, updateMetaDepartamento, selectAllMetaDepartamento, selectByIdMetaDepartamento, deleteMetaDepartamento }
