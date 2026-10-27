/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de COMPETENCIA
**************************************************************************************************************************/
const competenciaService = require('../../services/competencia/service_competencia.js')

const inserirNovoCompetencia = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await competenciaService.inserirCompetenciaService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarCompetencia = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await competenciaService.atualizarCompetenciaService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarCompetencia = async function () {
    try {
        return await competenciaService.listarCompetenciaService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarCompetencia = async function (id) {
    try {
        return await competenciaService.buscarCompetenciaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirCompetencia = async function (id) {
    try {
        return await competenciaService.excluirCompetenciaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoCompetencia, atualizarCompetencia, listarCompetencia, buscarCompetencia, excluirCompetencia }
