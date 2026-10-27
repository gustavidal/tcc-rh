/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de TELEFONE
 * Procedure: procTelefone
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertTelefone = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.numero_param === undefined ? null : parametros.numero_param, parametros.id_tipo_telefone_param === undefined ? null : parametros.id_tipo_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateTelefone = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.numero_param === undefined ? null : parametros.numero_param, parametros.id_tipo_telefone_param === undefined ? null : parametros.id_tipo_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllTelefone = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.numero_param === undefined ? null : parametros.numero_param, parametros.id_tipo_telefone_param === undefined ? null : parametros.id_tipo_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdTelefone = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.numero_param === undefined ? null : parametros.numero_param, parametros.id_tipo_telefone_param === undefined ? null : parametros.id_tipo_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteTelefone = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.numero_param === undefined ? null : parametros.numero_param, parametros.id_tipo_telefone_param === undefined ? null : parametros.id_tipo_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertTelefone, updateTelefone, selectAllTelefone, selectByIdTelefone, deleteTelefone }
