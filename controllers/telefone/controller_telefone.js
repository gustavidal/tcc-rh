/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de TELEFONE
**************************************************************************************************************************/
const telefoneService = require('../../services/telefone/service_telefone.js')

const inserirNovoTelefone = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await telefoneService.inserirTelefoneService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarTelefone = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await telefoneService.atualizarTelefoneService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarTelefone = async function () {
    try {
        return await telefoneService.listarTelefoneService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarTelefone = async function (id) {
    try {
        return await telefoneService.buscarTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirTelefone = async function (id) {
    try {
        return await telefoneService.excluirTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoTelefone, atualizarTelefone, listarTelefone, buscarTelefone, excluirTelefone }
