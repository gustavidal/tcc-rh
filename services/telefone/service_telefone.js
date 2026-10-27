/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de TELEFONE
********************************************************************************************/
const telefoneDAO = require('../../models/DAO/telefone/telefone.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirTelefoneService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('telefones', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await telefoneDAO.insertTelefone(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarTelefoneService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('telefones', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await telefoneDAO.updateTelefone(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarTelefoneService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('telefones', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await telefoneDAO.selectAllTelefone(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await telefoneDAO.selectByIdTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await telefoneDAO.deleteTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirTelefoneService, atualizarTelefoneService, listarTelefoneService, buscarTelefoneService, excluirTelefoneService }
