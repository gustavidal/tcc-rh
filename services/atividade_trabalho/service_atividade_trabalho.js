/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de ATIVIDADE_TRABALHO
********************************************************************************************/
const atividade_trabalhoDAO = require('../../models/DAO/atividade_trabalho/atividade_trabalho.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirAtividadeTrabalhoService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('atividades', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await atividade_trabalhoDAO.insertAtividadeTrabalho(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarAtividadeTrabalhoService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('atividades', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await atividade_trabalhoDAO.updateAtividadeTrabalho(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarAtividadeTrabalhoService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('atividades', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await atividade_trabalhoDAO.selectAllAtividadeTrabalho(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarAtividadeTrabalhoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('atividades', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await atividade_trabalhoDAO.selectByIdAtividadeTrabalho(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirAtividadeTrabalhoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('atividades', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await atividade_trabalhoDAO.deleteAtividadeTrabalho(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirAtividadeTrabalhoService, atualizarAtividadeTrabalhoService, listarAtividadeTrabalhoService, buscarAtividadeTrabalhoService, excluirAtividadeTrabalhoService }
