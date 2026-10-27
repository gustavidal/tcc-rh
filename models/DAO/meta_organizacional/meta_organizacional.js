/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de META_ORGANIZACIONAL
 * Procedure: procMetaOrganizacional
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertMetaOrganizacional = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procMetaOrganizacional(?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.prazo_param === undefined ? null : parametros.prazo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.id_status_meta_param === undefined ? null : parametros.id_status_meta_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateMetaOrganizacional = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procMetaOrganizacional(?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.prazo_param === undefined ? null : parametros.prazo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.id_status_meta_param === undefined ? null : parametros.id_status_meta_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllMetaOrganizacional = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procMetaOrganizacional(?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.prazo_param === undefined ? null : parametros.prazo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.id_status_meta_param === undefined ? null : parametros.id_status_meta_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdMetaOrganizacional = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procMetaOrganizacional(?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.prazo_param === undefined ? null : parametros.prazo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.id_status_meta_param === undefined ? null : parametros.id_status_meta_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteMetaOrganizacional = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procMetaOrganizacional(?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.prazo_param === undefined ? null : parametros.prazo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.id_status_meta_param === undefined ? null : parametros.id_status_meta_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertMetaOrganizacional, updateMetaOrganizacional, selectAllMetaOrganizacional, selectByIdMetaOrganizacional, deleteMetaOrganizacional }
