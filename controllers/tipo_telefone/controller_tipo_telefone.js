/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de TIPO_TELEFONE
**************************************************************************************************************************/
const tipo_telefoneService = require('../../services/tipo_telefone/service_tipo_telefone.js')

const inserirNovoTipoTelefone = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await tipo_telefoneService.inserirTipoTelefoneService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarTipoTelefone = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await tipo_telefoneService.atualizarTipoTelefoneService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarTipoTelefone = async function () {
    try {
        return await tipo_telefoneService.listarTipoTelefoneService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarTipoTelefone = async function (id) {
    try {
        return await tipo_telefoneService.buscarTipoTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirTipoTelefone = async function (id) {
    try {
        return await tipo_telefoneService.excluirTipoTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoTipoTelefone, atualizarTipoTelefone, listarTipoTelefone, buscarTipoTelefone, excluirTipoTelefone }
