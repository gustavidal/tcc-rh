/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FUNCIONARIO_DEPARTAMENTO
********************************************************************************************/
const funcionario_departamentoDAO = require('../../models/DAO/funcionario_departamento/funcionario_departamento.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFuncionarioDepartamentoService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('departamentos-colaborador', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_departamentoDAO.insertFuncionarioDepartamento(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFuncionarioDepartamentoService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('departamentos-colaborador', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_departamentoDAO.updateFuncionarioDepartamento(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFuncionarioDepartamentoService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('departamentos-colaborador', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_departamentoDAO.selectAllFuncionarioDepartamento(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFuncionarioDepartamentoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('departamentos-colaborador', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_departamentoDAO.selectByIdFuncionarioDepartamento(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFuncionarioDepartamentoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('departamentos-colaborador', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await funcionario_departamentoDAO.deleteFuncionarioDepartamento(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFuncionarioDepartamentoService, atualizarFuncionarioDepartamentoService, listarFuncionarioDepartamentoService, buscarFuncionarioDepartamentoService, excluirFuncionarioDepartamentoService }
