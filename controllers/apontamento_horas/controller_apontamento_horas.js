/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de APONTAMENTO_HORAS
**************************************************************************************************************************/
const apontamento_horasService = require('../../services/apontamento_horas/service_apontamento_horas.js')

const inserirNovoApontamentoHoras = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await apontamento_horasService.inserirApontamentoHorasService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarApontamentoHoras = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await apontamento_horasService.atualizarApontamentoHorasService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarApontamentoHoras = async function () {
    try {
        return await apontamento_horasService.listarApontamentoHorasService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarApontamentoHoras = async function (id) {
    try {
        return await apontamento_horasService.buscarApontamentoHorasService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirApontamentoHoras = async function (id) {
    try {
        return await apontamento_horasService.excluirApontamentoHorasService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoApontamentoHoras, atualizarApontamentoHoras, listarApontamentoHoras, buscarApontamentoHoras, excluirApontamentoHoras }
