/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de USUARIO_TELEFONE
 * Procedure: procUsuarioTelefone
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertUsuarioTelefone = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procUsuarioTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_usuario_param === undefined ? null : parametros.id_usuario_param, parametros.id_telefone_param === undefined ? null : parametros.id_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateUsuarioTelefone = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procUsuarioTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_usuario_param === undefined ? null : parametros.id_usuario_param, parametros.id_telefone_param === undefined ? null : parametros.id_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllUsuarioTelefone = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procUsuarioTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_usuario_param === undefined ? null : parametros.id_usuario_param, parametros.id_telefone_param === undefined ? null : parametros.id_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdUsuarioTelefone = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procUsuarioTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_usuario_param === undefined ? null : parametros.id_usuario_param, parametros.id_telefone_param === undefined ? null : parametros.id_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteUsuarioTelefone = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procUsuarioTelefone(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_usuario_param === undefined ? null : parametros.id_usuario_param, parametros.id_telefone_param === undefined ? null : parametros.id_telefone_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertUsuarioTelefone, updateUsuarioTelefone, selectAllUsuarioTelefone, selectByIdUsuarioTelefone, deleteUsuarioTelefone }
