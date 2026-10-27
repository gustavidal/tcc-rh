/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FUNCIONARIO_TELEFONE
********************************************************************************************/
const funcionario_telefoneDAO = require('../../models/DAO/funcionario_telefone/funcionario_telefone.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFuncionarioTelefoneService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('telefones-colaborador', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_telefoneDAO.insertFuncionarioTelefone(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFuncionarioTelefoneService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('telefones-colaborador', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_telefoneDAO.updateFuncionarioTelefone(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFuncionarioTelefoneService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('telefones-colaborador', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_telefoneDAO.selectAllFuncionarioTelefone(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFuncionarioTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones-colaborador', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_telefoneDAO.selectByIdFuncionarioTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFuncionarioTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('telefones-colaborador', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_telefoneDAO.deleteFuncionarioTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFuncionarioTelefoneService, atualizarFuncionarioTelefoneService, listarFuncionarioTelefoneService, buscarFuncionarioTelefoneService, excluirFuncionarioTelefoneService }
