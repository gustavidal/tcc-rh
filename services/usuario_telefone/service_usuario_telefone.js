/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de USUARIO_TELEFONE
********************************************************************************************/
const usuario_telefoneDAO = require('../../models/DAO/usuario_telefone/usuario_telefone.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirUsuarioTelefoneService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('telefones-usuario', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_telefoneDAO.insertUsuarioTelefone(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarUsuarioTelefoneService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('telefones-usuario', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_telefoneDAO.updateUsuarioTelefone(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarUsuarioTelefoneService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('telefones-usuario', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_telefoneDAO.selectAllUsuarioTelefone(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarUsuarioTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones-usuario', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_telefoneDAO.selectByIdUsuarioTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirUsuarioTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones-usuario', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuario_telefoneDAO.deleteUsuarioTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirUsuarioTelefoneService, atualizarUsuarioTelefoneService, listarUsuarioTelefoneService, buscarUsuarioTelefoneService, excluirUsuarioTelefoneService }
