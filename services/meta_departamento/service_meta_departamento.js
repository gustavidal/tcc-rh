/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de META_DEPARTAMENTO
********************************************************************************************/
const meta_departamentoDAO = require('../../models/DAO/meta_departamento/meta_departamento.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirMetaDepartamentoService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('metas-departamento', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_departamentoDAO.insertMetaDepartamento(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarMetaDepartamentoService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('metas-departamento', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_departamentoDAO.updateMetaDepartamento(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarMetaDepartamentoService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('metas-departamento', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_departamentoDAO.selectAllMetaDepartamento(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarMetaDepartamentoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('metas-departamento', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_departamentoDAO.selectByIdMetaDepartamento(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirMetaDepartamentoService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('metas-departamento', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_departamentoDAO.deleteMetaDepartamento(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirMetaDepartamentoService, atualizarMetaDepartamentoService, listarMetaDepartamentoService, buscarMetaDepartamentoService, excluirMetaDepartamentoService }
