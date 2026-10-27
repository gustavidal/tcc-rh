/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de DEPARTAMENTO_EMAIL
 * Procedure: procDepartamentoEmail
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertDepartamentoEmail = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procDepartamentoEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_email_param === undefined ? null : parametros.id_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateDepartamentoEmail = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procDepartamentoEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_email_param === undefined ? null : parametros.id_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllDepartamentoEmail = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procDepartamentoEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_email_param === undefined ? null : parametros.id_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdDepartamentoEmail = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procDepartamentoEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_email_param === undefined ? null : parametros.id_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteDepartamentoEmail = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procDepartamentoEmail(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_email_param === undefined ? null : parametros.id_email_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertDepartamentoEmail, updateDepartamentoEmail, selectAllDepartamentoEmail, selectByIdDepartamentoEmail, deleteDepartamentoEmail }
