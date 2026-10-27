/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de ATIVIDADE_TRABALHO
**************************************************************************************************************************/
const atividade_trabalhoService = require('../../services/atividade_trabalho/service_atividade_trabalho.js')

const inserirNovoAtividadeTrabalho = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await atividade_trabalhoService.inserirAtividadeTrabalhoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarAtividadeTrabalho = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await atividade_trabalhoService.atualizarAtividadeTrabalhoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarAtividadeTrabalho = async function () {
    try {
        return await atividade_trabalhoService.listarAtividadeTrabalhoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarAtividadeTrabalho = async function (id) {
    try {
        return await atividade_trabalhoService.buscarAtividadeTrabalhoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirAtividadeTrabalho = async function (id) {
    try {
        return await atividade_trabalhoService.excluirAtividadeTrabalhoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoAtividadeTrabalho, atualizarAtividadeTrabalho, listarAtividadeTrabalho, buscarAtividadeTrabalho, excluirAtividadeTrabalho }
