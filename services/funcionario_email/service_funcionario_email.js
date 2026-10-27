/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FUNCIONARIO_EMAIL
********************************************************************************************/
const funcionario_emailDAO = require('../../models/DAO/funcionario_email/funcionario_email.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFuncionarioEmailService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('emails-colaborador', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_emailDAO.insertFuncionarioEmail(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFuncionarioEmailService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('emails-colaborador', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_emailDAO.updateFuncionarioEmail(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFuncionarioEmailService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('emails-colaborador', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_emailDAO.selectAllFuncionarioEmail(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFuncionarioEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('emails-colaborador', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_emailDAO.selectByIdFuncionarioEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFuncionarioEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('emails-colaborador', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_emailDAO.deleteFuncionarioEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFuncionarioEmailService, atualizarFuncionarioEmailService, listarFuncionarioEmailService, buscarFuncionarioEmailService, excluirFuncionarioEmailService }
