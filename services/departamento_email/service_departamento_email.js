/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de DEPARTAMENTO_EMAIL
********************************************************************************************/
const departamento_emailDAO = require('../../models/DAO/departamento_email/departamento_email.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirDepartamentoEmailService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('emails-departamento', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_emailDAO.insertDepartamentoEmail(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarDepartamentoEmailService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('emails-departamento', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_emailDAO.updateDepartamentoEmail(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarDepartamentoEmailService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('emails-departamento', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_emailDAO.selectAllDepartamentoEmail(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarDepartamentoEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('emails-departamento', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_emailDAO.selectByIdDepartamentoEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirDepartamentoEmailService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('emails-departamento', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_emailDAO.deleteDepartamentoEmail(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirDepartamentoEmailService, atualizarDepartamentoEmailService, listarDepartamentoEmailService, buscarDepartamentoEmailService, excluirDepartamentoEmailService }
