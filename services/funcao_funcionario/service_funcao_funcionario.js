/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FUNCAO_FUNCIONARIO
********************************************************************************************/
const funcao_funcionarioDAO = require('../../models/DAO/funcao_funcionario/funcao_funcionario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFuncaoFuncionarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('funcoes-colaborador', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcao_funcionarioDAO.insertFuncaoFuncionario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFuncaoFuncionarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('funcoes-colaborador', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcao_funcionarioDAO.updateFuncaoFuncionario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFuncaoFuncionarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('funcoes-colaborador', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcao_funcionarioDAO.selectAllFuncaoFuncionario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFuncaoFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('funcoes-colaborador', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcao_funcionarioDAO.selectByIdFuncaoFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFuncaoFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('funcoes-colaborador', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcao_funcionarioDAO.deleteFuncaoFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFuncaoFuncionarioService, atualizarFuncaoFuncionarioService, listarFuncaoFuncionarioService, buscarFuncaoFuncionarioService, excluirFuncaoFuncionarioService }
