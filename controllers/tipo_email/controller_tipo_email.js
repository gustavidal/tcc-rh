/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de TIPO_EMAIL
**************************************************************************************************************************/
const tipo_emailService = require('../../services/tipo_email/service_tipo_email.js')

const inserirNovoTipoEmail = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await tipo_emailService.inserirTipoEmailService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarTipoEmail = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await tipo_emailService.atualizarTipoEmailService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarTipoEmail = async function () {
    try {
        return await tipo_emailService.listarTipoEmailService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarTipoEmail = async function (id) {
    try {
        return await tipo_emailService.buscarTipoEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirTipoEmail = async function (id) {
    try {
        return await tipo_emailService.excluirTipoEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoTipoEmail, atualizarTipoEmail, listarTipoEmail, buscarTipoEmail, excluirTipoEmail }
