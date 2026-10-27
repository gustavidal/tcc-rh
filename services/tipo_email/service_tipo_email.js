/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de TIPO_EMAIL
********************************************************************************************/
const tipo_emailDAO = require('../../models/DAO/tipo_email/tipo_email.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirTipoEmailService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('tipos-email', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_emailDAO.insertTipoEmail(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarTipoEmailService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('tipos-email', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_emailDAO.updateTipoEmail(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarTipoEmailService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('tipos-email', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_emailDAO.selectAllTipoEmail(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarTipoEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('tipos-email', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_emailDAO.selectByIdTipoEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirTipoEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('tipos-email', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_emailDAO.deleteTipoEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirTipoEmailService, atualizarTipoEmailService, listarTipoEmailService, buscarTipoEmailService, excluirTipoEmailService }
