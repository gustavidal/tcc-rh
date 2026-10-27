/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de STATUS_META
**************************************************************************************************************************/
const status_metaService = require('../../services/status_meta/service_status_meta.js')

const inserirNovoStatusMeta = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await status_metaService.inserirStatusMetaService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarStatusMeta = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await status_metaService.atualizarStatusMetaService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarStatusMeta = async function () {
    try {
        return await status_metaService.listarStatusMetaService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarStatusMeta = async function (id) {
    try {
        return await status_metaService.buscarStatusMetaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirStatusMeta = async function (id) {
    try {
        return await status_metaService.excluirStatusMetaService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoStatusMeta, atualizarStatusMeta, listarStatusMeta, buscarStatusMeta, excluirStatusMeta }
