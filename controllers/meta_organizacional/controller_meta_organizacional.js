/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de META_ORGANIZACIONAL
**************************************************************************************************************************/
const meta_organizacionalService = require('../../services/meta_organizacional/service_meta_organizacional.js')

const inserirNovoMetaOrganizacional = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await meta_organizacionalService.inserirMetaOrganizacionalService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarMetaOrganizacional = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await meta_organizacionalService.atualizarMetaOrganizacionalService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarMetaOrganizacional = async function () {
    try {
        return await meta_organizacionalService.listarMetaOrganizacionalService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarMetaOrganizacional = async function (id) {
    try {
        return await meta_organizacionalService.buscarMetaOrganizacionalService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirMetaOrganizacional = async function (id) {
    try {
        return await meta_organizacionalService.excluirMetaOrganizacionalService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoMetaOrganizacional, atualizarMetaOrganizacional, listarMetaOrganizacional, buscarMetaOrganizacional, excluirMetaOrganizacional }
