/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FUNCAO
********************************************************************************************/
const funcaoDAO = require('../../models/DAO/funcao/funcao.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFuncaoService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('funcoes', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcaoDAO.insertFuncao(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFuncaoService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('funcoes', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcaoDAO.updateFuncao(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFuncaoService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('funcoes', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcaoDAO.selectAllFuncao(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFuncaoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('funcoes', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcaoDAO.selectByIdFuncao(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFuncaoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('funcoes', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcaoDAO.deleteFuncao(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFuncaoService, atualizarFuncaoService, listarFuncaoService, buscarFuncaoService, excluirFuncaoService }
