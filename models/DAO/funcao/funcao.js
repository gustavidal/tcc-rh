/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de FUNCAO
 * Procedure: procFuncao
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertFuncao = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procFuncao(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateFuncao = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procFuncao(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllFuncao = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procFuncao(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdFuncao = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procFuncao(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteFuncao = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procFuncao(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.nome_param === undefined ? null : parametros.nome_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertFuncao, updateFuncao, selectAllFuncao, selectByIdFuncao, deleteFuncao }
