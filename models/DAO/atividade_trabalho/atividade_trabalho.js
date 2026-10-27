/*******************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao banco de dados de ATIVIDADE_TRABALHO
 * Procedure: procAtividadeTrabalho
********************************************************************************************/
const knexConection = require('../../global_knex/global_knex.js')

const insertAtividadeTrabalho = async function (dados, transaction = null) {
    try {
        let parametros = { ...dados, operacao: 'INSERT' }
        let sql = `call procAtividadeTrabalho(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_responsavel_param === undefined ? null : parametros.id_usuario_responsavel_param, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.quantidade_tarefas_param === undefined ? null : parametros.quantidade_tarefas_param, parametros.horas_previstas_param === undefined ? null : parametros.horas_previstas_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.status_param === undefined ? null : parametros.status_param, parametros.data_conclusao_param === undefined ? null : parametros.data_conclusao_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const updateAtividadeTrabalho = async function (dados, id, transaction = null) {
    try {
        let parametros = { ...dados, id_param: id, operacao: 'UPDATE' }
        let sql = `call procAtividadeTrabalho(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_responsavel_param === undefined ? null : parametros.id_usuario_responsavel_param, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.quantidade_tarefas_param === undefined ? null : parametros.quantidade_tarefas_param, parametros.horas_previstas_param === undefined ? null : parametros.horas_previstas_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.status_param === undefined ? null : parametros.status_param, parametros.data_conclusao_param === undefined ? null : parametros.data_conclusao_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectAllAtividadeTrabalho = async function (transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_ALL' }
        let sql = `call procAtividadeTrabalho(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_responsavel_param === undefined ? null : parametros.id_usuario_responsavel_param, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.quantidade_tarefas_param === undefined ? null : parametros.quantidade_tarefas_param, parametros.horas_previstas_param === undefined ? null : parametros.horas_previstas_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.status_param === undefined ? null : parametros.status_param, parametros.data_conclusao_param === undefined ? null : parametros.data_conclusao_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const selectByIdAtividadeTrabalho = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'SELECT_BY_ID', id_param: id }
        let sql = `call procAtividadeTrabalho(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_responsavel_param === undefined ? null : parametros.id_usuario_responsavel_param, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.quantidade_tarefas_param === undefined ? null : parametros.quantidade_tarefas_param, parametros.horas_previstas_param === undefined ? null : parametros.horas_previstas_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.status_param === undefined ? null : parametros.status_param, parametros.data_conclusao_param === undefined ? null : parametros.data_conclusao_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

const deleteAtividadeTrabalho = async function (id, transaction = null) {
    try {
        let parametros = { operacao: 'DELETE', id_param: id }
        let sql = `call procAtividadeTrabalho(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
        let result = await (transaction || knexConection).raw(sql, [parametros.operacao === undefined ? null : parametros.operacao, parametros.id_funcionario_param === undefined ? null : parametros.id_funcionario_param, parametros.id_usuario_responsavel_param === undefined ? null : parametros.id_usuario_responsavel_param, parametros.titulo_param === undefined ? null : parametros.titulo_param, parametros.descricao_param === undefined ? null : parametros.descricao_param, parametros.quantidade_tarefas_param === undefined ? null : parametros.quantidade_tarefas_param, parametros.horas_previstas_param === undefined ? null : parametros.horas_previstas_param, parametros.semana_referencia_param === undefined ? null : parametros.semana_referencia_param, parametros.status_param === undefined ? null : parametros.status_param, parametros.data_conclusao_param === undefined ? null : parametros.data_conclusao_param, parametros.id_param === undefined ? null : parametros.id_param])
        result = Array.isArray(result[0]) && Array.isArray(result[0][0]) ? result[0][0] : result[0]
        return result
    } catch (error) {
        throw error
    }
}

module.exports = { insertAtividadeTrabalho, updateAtividadeTrabalho, selectAllAtividadeTrabalho, selectByIdAtividadeTrabalho, deleteAtividadeTrabalho }
