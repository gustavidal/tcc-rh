/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de TIPO_COMPETENCIA
**************************************************************************************************************************/
const tipo_competenciaService = require('../../services/tipo_competencia/service_tipo_competencia.js')

const inserirNovoTipoCompetencia = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await tipo_competenciaService.inserirTipoCompetenciaService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarTipoCompetencia = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await tipo_competenciaService.atualizarTipoCompetenciaService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarTipoCompetencia = async function () {
    try {
        return await tipo_competenciaService.listarTipoCompetenciaService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarTipoCompetencia = async function (id) {
    try {
        return await tipo_competenciaService.buscarTipoCompetenciaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirTipoCompetencia = async function (id) {
    try {
        return await tipo_competenciaService.excluirTipoCompetenciaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoTipoCompetencia, atualizarTipoCompetencia, listarTipoCompetencia, buscarTipoCompetencia, excluirTipoCompetencia }
