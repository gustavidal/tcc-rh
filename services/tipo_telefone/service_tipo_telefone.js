/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de TIPO_TELEFONE
********************************************************************************************/
const tipo_telefoneDAO = require('../../models/DAO/tipo_telefone/tipo_telefone.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirTipoTelefoneService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('tipos-telefone', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_telefoneDAO.insertTipoTelefone(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarTipoTelefoneService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('tipos-telefone', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_telefoneDAO.updateTipoTelefone(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarTipoTelefoneService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('tipos-telefone', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_telefoneDAO.selectAllTipoTelefone(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarTipoTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('tipos-telefone', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_telefoneDAO.selectByIdTipoTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirTipoTelefoneService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('tipos-telefone', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await tipo_telefoneDAO.deleteTipoTelefone(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirTipoTelefoneService, atualizarTipoTelefoneService, listarTipoTelefoneService, buscarTipoTelefoneService, excluirTipoTelefoneService }
