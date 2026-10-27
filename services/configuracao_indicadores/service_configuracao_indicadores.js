/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de CONFIGURACAO_INDICADORES
********************************************************************************************/
const configuracao_indicadoresDAO = require('../../models/DAO/configuracao_indicadores/configuracao_indicadores.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirConfiguracaoIndicadoresService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('configuracoes-indicadores', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await configuracao_indicadoresDAO.insertConfiguracaoIndicadores(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarConfiguracaoIndicadoresService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('configuracoes-indicadores', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await configuracao_indicadoresDAO.updateConfiguracaoIndicadores(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarConfiguracaoIndicadoresService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('configuracoes-indicadores', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await configuracao_indicadoresDAO.selectAllConfiguracaoIndicadores(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarConfiguracaoIndicadoresService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('configuracoes-indicadores', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await configuracao_indicadoresDAO.selectByIdConfiguracaoIndicadores(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirConfiguracaoIndicadoresService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('configuracoes-indicadores', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await configuracao_indicadoresDAO.deleteConfiguracaoIndicadores(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirConfiguracaoIndicadoresService, atualizarConfiguracaoIndicadoresService, listarConfiguracaoIndicadoresService, buscarConfiguracaoIndicadoresService, excluirConfiguracaoIndicadoresService }
