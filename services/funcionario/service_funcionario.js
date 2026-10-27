/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FUNCIONARIO
********************************************************************************************/
const funcionarioDAO = require('../../models/DAO/funcionario/funcionario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFuncionarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('colaboradores', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionarioDAO.insertFuncionario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFuncionarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('colaboradores', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionarioDAO.updateFuncionario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFuncionarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('colaboradores', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionarioDAO.selectAllFuncionario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('colaboradores', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionarioDAO.selectByIdFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('colaboradores', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionarioDAO.deleteFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFuncionarioService, atualizarFuncionarioService, listarFuncionarioService, buscarFuncionarioService, excluirFuncionarioService }
