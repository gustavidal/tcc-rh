/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de TIPO_COMPETENCIA
********************************************************************************************/
const tipo_competenciaDAO = require('../../models/DAO/tipo_competencia/tipo_competencia.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirTipoCompetenciaService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('tipos-competencia', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_competenciaDAO.insertTipoCompetencia(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarTipoCompetenciaService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('tipos-competencia', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_competenciaDAO.updateTipoCompetencia(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarTipoCompetenciaService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('tipos-competencia', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_competenciaDAO.selectAllTipoCompetencia(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarTipoCompetenciaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('tipos-competencia', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_competenciaDAO.selectByIdTipoCompetencia(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirTipoCompetenciaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('tipos-competencia', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_competenciaDAO.deleteTipoCompetencia(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirTipoCompetenciaService, atualizarTipoCompetenciaService, listarTipoCompetenciaService, buscarTipoCompetenciaService, excluirTipoCompetenciaService }
