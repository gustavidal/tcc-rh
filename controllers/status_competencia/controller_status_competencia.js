/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de STATUS_COMPETENCIA
**************************************************************************************************************************/
const status_competenciaService = require('../../services/status_competencia/service_status_competencia.js')

const inserirNovoStatusCompetencia = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await status_competenciaService.inserirStatusCompetenciaService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarStatusCompetencia = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await status_competenciaService.atualizarStatusCompetenciaService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarStatusCompetencia = async function () {
    try {
        return await status_competenciaService.listarStatusCompetenciaService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarStatusCompetencia = async function (id) {
    try {
        return await status_competenciaService.buscarStatusCompetenciaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirStatusCompetencia = async function (id) {
    try {
        return await status_competenciaService.excluirStatusCompetenciaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoStatusCompetencia, atualizarStatusCompetencia, listarStatusCompetencia, buscarStatusCompetencia, excluirStatusCompetencia }
