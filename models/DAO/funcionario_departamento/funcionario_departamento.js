/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de FUNCIONARIO_DEPARTAMENTO
 * Procedure: procFuncionarioDepartamento
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertFuncionarioDepartamento = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procFuncionarioDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateFuncionarioDepartamento = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procFuncionarioDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllFuncionarioDepartamento = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procFuncionarioDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdFuncionarioDepartamento = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procFuncionarioDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteFuncionarioDepartamento = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procFuncionarioDepartamento(?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_departamento_param === undefined ? null : parametros.id_departamento_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertFuncionarioDepartamento, updateFuncionarioDepartamento, selectAllFuncionarioDepartamento, selectByIdFuncionarioDepartamento, deleteFuncionarioDepartamento }
