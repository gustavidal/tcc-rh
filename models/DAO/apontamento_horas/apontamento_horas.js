/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de APONTAMENTO_HORAS
 * Procedure: procApontamentoHoras
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertApontamentoHoras = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procApontamentoHoras(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_registro_param === undefined ? null : parametros.id_usuario_registro_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.horas_trabalhadas_param === undefined ? null : parametros.horas_trabalhadas_param, parametros.horas_extras_param === undefined ? null : parametros.horas_extras_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateApontamentoHoras = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procApontamentoHoras(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_registro_param === undefined ? null : parametros.id_usuario_registro_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.horas_trabalhadas_param === undefined ? null : parametros.horas_trabalhadas_param, parametros.horas_extras_param === undefined ? null : parametros.horas_extras_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllApontamentoHoras = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procApontamentoHoras(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_registro_param === undefined ? null : parametros.id_usuario_registro_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.horas_trabalhadas_param === undefined ? null : parametros.horas_trabalhadas_param, parametros.horas_extras_param === undefined ? null : parametros.horas_extras_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdApontamentoHoras = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procApontamentoHoras(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_registro_param === undefined ? null : parametros.id_usuario_registro_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.horas_trabalhadas_param === undefined ? null : parametros.horas_trabalhadas_param, parametros.horas_extras_param === undefined ? null : parametros.horas_extras_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteApontamentoHoras = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procApontamentoHoras(?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_registro_param === undefined ? null : parametros.id_usuario_registro_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.horas_trabalhadas_param === undefined ? null : parametros.horas_trabalhadas_param, parametros.horas_extras_param === undefined ? null : parametros.horas_extras_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertApontamentoHoras, updateApontamentoHoras, selectAllApontamentoHoras, selectByIdApontamentoHoras, deleteApontamentoHoras }
