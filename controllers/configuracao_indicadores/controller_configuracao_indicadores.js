/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de CONFIGURACAO_INDICADORES
**************************************************************************************************************************/
const configuracao_indicadoresService = require('../../services/configuracao_indicadores/service_configuracao_indicadores.js')

const inserirNovoConfiguracaoIndicadores = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await configuracao_indicadoresService.inserirConfiguracaoIndicadoresService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarConfiguracaoIndicadores = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await configuracao_indicadoresService.atualizarConfiguracaoIndicadoresService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarConfiguracaoIndicadores = async function () {
    try {
        return await configuracao_indicadoresService.listarConfiguracaoIndicadoresService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarConfiguracaoIndicadores = async function (id) {
    try {
        return await configuracao_indicadoresService.buscarConfiguracaoIndicadoresService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirConfiguracaoIndicadores = async function (id) {
    try {
        return await configuracao_indicadoresService.excluirConfiguracaoIndicadoresService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoConfiguracaoIndicadores, atualizarConfiguracaoIndicadores, listarConfiguracaoIndicadores, buscarConfiguracaoIndicadores, excluirConfiguracaoIndicadores }
