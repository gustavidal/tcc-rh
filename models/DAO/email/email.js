/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de EMAIL
 * Procedure: procEmail
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertEmail = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.email_param === undefined ? null : parametros.email_param, parametros.id_tipo_email_param === undefined ? null : parametros.id_tipo_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateEmail = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.email_param === undefined ? null : parametros.email_param, parametros.id_tipo_email_param === undefined ? null : parametros.id_tipo_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllEmail = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.email_param === undefined ? null : parametros.email_param, parametros.id_tipo_email_param === undefined ? null : parametros.id_tipo_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdEmail = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.email_param === undefined ? null : parametros.email_param, parametros.id_tipo_email_param === undefined ? null : parametros.id_tipo_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteEmail = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.email_param === undefined ? null : parametros.email_param, parametros.id_tipo_email_param === undefined ? null : parametros.id_tipo_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertEmail, updateEmail, selectAllEmail, selectByIdEmail, deleteEmail }
