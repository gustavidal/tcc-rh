/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de CONFIGURACAO_INDICADORES
 * Procedure: procConfiguracaoIndicadores
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertConfiguracaoIndicadores = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procConfiguracaoIndicadores(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.limite_sobrecarga_param === undefined ? null : parametros.limite_sobrecarga_param, parametros.limite_baixo_desempenho_param === undefined ? null : parametros.limite_baixo_desempenho_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateConfiguracaoIndicadores = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procConfiguracaoIndicadores(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.limite_sobrecarga_param === undefined ? null : parametros.limite_sobrecarga_param, parametros.limite_baixo_desempenho_param === undefined ? null : parametros.limite_baixo_desempenho_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllConfiguracaoIndicadores = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procConfiguracaoIndicadores(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.limite_sobrecarga_param === undefined ? null : parametros.limite_sobrecarga_param, parametros.limite_baixo_desempenho_param === undefined ? null : parametros.limite_baixo_desempenho_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdConfiguracaoIndicadores = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procConfiguracaoIndicadores(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.limite_sobrecarga_param === undefined ? null : parametros.limite_sobrecarga_param, parametros.limite_baixo_desempenho_param === undefined ? null : parametros.limite_baixo_desempenho_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteConfiguracaoIndicadores = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procConfiguracaoIndicadores(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.limite_sobrecarga_param === undefined ? null : parametros.limite_sobrecarga_param, parametros.limite_baixo_desempenho_param === undefined ? null : parametros.limite_baixo_desempenho_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertConfiguracaoIndicadores, updateConfiguracaoIndicadores, selectAllConfiguracaoIndicadores, selectByIdConfiguracaoIndicadores, deleteConfiguracaoIndicadores }
