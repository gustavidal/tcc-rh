/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de STATUS_META
********************************************************************************************/
const status_metaDAO = require('../../models/DAO/status_meta/status_meta.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirStatusMetaService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('status-meta', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_metaDAO.insertStatusMeta(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarStatusMetaService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('status-meta', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_metaDAO.updateStatusMeta(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarStatusMetaService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('status-meta', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_metaDAO.selectAllStatusMeta(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarStatusMetaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('status-meta', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_metaDAO.selectByIdStatusMeta(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirStatusMetaService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('status-meta', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await status_metaDAO.deleteStatusMeta(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirStatusMetaService, atualizarStatusMetaService, listarStatusMetaService, buscarStatusMetaService, excluirStatusMetaService }
