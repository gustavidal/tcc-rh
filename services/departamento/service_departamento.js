/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de DEPARTAMENTO
********************************************************************************************/
const departamentoDAO = require('../../models/DAO/departamento/departamento.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirDepartamentoService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('departamentos', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamentoDAO.insertDepartamento(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarDepartamentoService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('departamentos', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamentoDAO.updateDepartamento(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarDepartamentoService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('departamentos', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamentoDAO.selectAllDepartamento(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarDepartamentoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('departamentos', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamentoDAO.selectByIdDepartamento(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirDepartamentoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('departamentos', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await departamentoDAO.deleteDepartamento(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirDepartamentoService, atualizarDepartamentoService, listarDepartamentoService, buscarDepartamentoService, excluirDepartamentoService }
