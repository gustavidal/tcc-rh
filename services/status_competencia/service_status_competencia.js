/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de STATUS_COMPETENCIA
********************************************************************************************/
const status_competenciaDAO = require('../../models/DAO/status_competencia/status_competencia.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirStatusCompetenciaService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('status-competencia', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_competenciaDAO.insertStatusCompetencia(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarStatusCompetenciaService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('status-competencia', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_competenciaDAO.updateStatusCompetencia(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarStatusCompetenciaService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('status-competencia', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_competenciaDAO.selectAllStatusCompetencia(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarStatusCompetenciaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('status-competencia', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_competenciaDAO.selectByIdStatusCompetencia(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirStatusCompetenciaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('status-competencia', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_competenciaDAO.deleteStatusCompetencia(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirStatusCompetenciaService, atualizarStatusCompetenciaService, listarStatusCompetenciaService, buscarStatusCompetenciaService, excluirStatusCompetenciaService }
