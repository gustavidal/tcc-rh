/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de USUARIO_EMAIL
********************************************************************************************/
const usuario_emailDAO = require('../../models/DAO/usuario_email/usuario_email.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirUsuarioEmailService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('emails-usuario', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_emailDAO.insertUsuarioEmail(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarUsuarioEmailService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('emails-usuario', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_emailDAO.updateUsuarioEmail(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarUsuarioEmailService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('emails-usuario', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_emailDAO.selectAllUsuarioEmail(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarUsuarioEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('emails-usuario', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_emailDAO.selectByIdUsuarioEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirUsuarioEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('emails-usuario', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_emailDAO.deleteUsuarioEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirUsuarioEmailService, atualizarUsuarioEmailService, listarUsuarioEmailService, buscarUsuarioEmailService, excluirUsuarioEmailService }
