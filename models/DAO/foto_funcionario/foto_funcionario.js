/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de FOTO_FUNCIONARIO
 * Procedure: procFotoFuncionario
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertFotoFuncionario = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procFotoFuncionario(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.foto_param === undefined ? null : parametros.foto_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateFotoFuncionario = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procFotoFuncionario(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.foto_param === undefined ? null : parametros.foto_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllFotoFuncionario = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procFotoFuncionario(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.foto_param === undefined ? null : parametros.foto_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdFotoFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procFotoFuncionario(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.foto_param === undefined ? null : parametros.foto_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteFotoFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procFotoFuncionario(?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.foto_param === undefined ? null : parametros.foto_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertFotoFuncionario, updateFotoFuncionario, selectAllFotoFuncionario, selectByIdFotoFuncionario, deleteFotoFuncionario }
