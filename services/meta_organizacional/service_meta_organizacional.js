/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de META_ORGANIZACIONAL
********************************************************************************************/
const meta_organizacionalDAO = require('../../models/DAO/meta_organizacional/meta_organizacional.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirMetaOrganizacionalService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('metas', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacionalDAO.insertMetaOrganizacional(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarMetaOrganizacionalService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('metas', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacionalDAO.updateMetaOrganizacional(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarMetaOrganizacionalService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('metas', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacionalDAO.selectAllMetaOrganizacional(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarMetaOrganizacionalService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('metas', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacionalDAO.selectByIdMetaOrganizacional(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirMetaOrganizacionalService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('metas', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacionalDAO.deleteMetaOrganizacional(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirMetaOrganizacionalService, atualizarMetaOrganizacionalService, listarMetaOrganizacionalService, buscarMetaOrganizacionalService, excluirMetaOrganizacionalService }
