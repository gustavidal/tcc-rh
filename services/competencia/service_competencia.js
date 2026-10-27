/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de COMPETENCIA
********************************************************************************************/
const competenciaDAO = require('../../models/DAO/competencia/competencia.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirCompetenciaService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('competencias', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competenciaDAO.insertCompetencia(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarCompetenciaService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('competencias', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competenciaDAO.updateCompetencia(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarCompetenciaService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('competencias', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competenciaDAO.selectAllCompetencia(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarCompetenciaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('competencias', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competenciaDAO.selectByIdCompetencia(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirCompetenciaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('competencias', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competenciaDAO.deleteCompetencia(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirCompetenciaService, atualizarCompetenciaService, listarCompetenciaService, buscarCompetenciaService, excluirCompetenciaService }
