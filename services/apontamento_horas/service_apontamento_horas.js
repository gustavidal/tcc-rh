/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de APONTAMENTO_HORAS
********************************************************************************************/
const apontamento_horasDAO = require('../../models/DAO/apontamento_horas/apontamento_horas.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirApontamentoHorasService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('horas', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await apontamento_horasDAO.insertApontamentoHoras(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarApontamentoHorasService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('horas', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await apontamento_horasDAO.updateApontamentoHoras(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarApontamentoHorasService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('horas', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await apontamento_horasDAO.selectAllApontamentoHoras(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarApontamentoHorasService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('horas', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await apontamento_horasDAO.selectByIdApontamentoHoras(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirApontamentoHorasService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('horas', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await apontamento_horasDAO.deleteApontamentoHoras(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirApontamentoHorasService, atualizarApontamentoHorasService, listarApontamentoHorasService, buscarApontamentoHorasService, excluirApontamentoHorasService }
