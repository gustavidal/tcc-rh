/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de JORNADA_FUNCIONARIO
 * Procedure: procJornadaFuncionario
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertJornadaFuncionario = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procJornadaFuncionario(?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.horas_semanais_param === undefined ? null : parametros.horas_semanais_param, parametros.vigente_desde_param === undefined ? null : parametros.vigente_desde_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateJornadaFuncionario = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procJornadaFuncionario(?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.horas_semanais_param === undefined ? null : parametros.horas_semanais_param, parametros.vigente_desde_param === undefined ? null : parametros.vigente_desde_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllJornadaFuncionario = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procJornadaFuncionario(?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.horas_semanais_param === undefined ? null : parametros.horas_semanais_param, parametros.vigente_desde_param === undefined ? null : parametros.vigente_desde_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdJornadaFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procJornadaFuncionario(?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.horas_semanais_param === undefined ? null : parametros.horas_semanais_param, parametros.vigente_desde_param === undefined ? null : parametros.vigente_desde_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteJornadaFuncionario = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procJornadaFuncionario(?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.horas_semanais_param === undefined ? null : parametros.horas_semanais_param, parametros.vigente_desde_param === undefined ? null : parametros.vigente_desde_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertJornadaFuncionario, updateJornadaFuncionario, selectAllJornadaFuncionario, selectByIdJornadaFuncionario, deleteJornadaFuncionario }
