/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de META_ORGANIZACIONAL_FUNCIONARIO
********************************************************************************************/
const meta_organizacional_funcionarioDAO = require('../../models/DAO/meta_organizacional_funcionario/meta_organizacional_funcionario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirMetaOrganizacionalFuncionarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('metas-colaborador', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacional_funcionarioDAO.insertMetaOrganizacionalFuncionario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarMetaOrganizacionalFuncionarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('metas-colaborador', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacional_funcionarioDAO.updateMetaOrganizacionalFuncionario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarMetaOrganizacionalFuncionarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('metas-colaborador', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacional_funcionarioDAO.selectAllMetaOrganizacionalFuncionario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarMetaOrganizacionalFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('metas-colaborador', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacional_funcionarioDAO.selectByIdMetaOrganizacionalFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirMetaOrganizacionalFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('metas-colaborador', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await meta_organizacional_funcionarioDAO.deleteMetaOrganizacionalFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirMetaOrganizacionalFuncionarioService, atualizarMetaOrganizacionalFuncionarioService, listarMetaOrganizacionalFuncionarioService, buscarMetaOrganizacionalFuncionarioService, excluirMetaOrganizacionalFuncionarioService }
