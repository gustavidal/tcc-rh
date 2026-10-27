/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de DEPARTAMENTO_TELEFONE
********************************************************************************************/
const departamento_telefoneDAO = require('../../models/DAO/departamento_telefone/departamento_telefone.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirDepartamentoTelefoneService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('telefones-departamento', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_telefoneDAO.insertDepartamentoTelefone(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarDepartamentoTelefoneService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('telefones-departamento', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_telefoneDAO.updateDepartamentoTelefone(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarDepartamentoTelefoneService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('telefones-departamento', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_telefoneDAO.selectAllDepartamentoTelefone(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarDepartamentoTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones-departamento', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_telefoneDAO.selectByIdDepartamentoTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirDepartamentoTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones-departamento', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamento_telefoneDAO.deleteDepartamentoTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirDepartamentoTelefoneService, atualizarDepartamentoTelefoneService, listarDepartamentoTelefoneService, buscarDepartamentoTelefoneService, excluirDepartamentoTelefoneService }
