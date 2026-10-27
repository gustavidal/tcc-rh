/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de EMAIL
**************************************************************************************************************************/
const emailService = require('../../services/email/service_email.js')

const inserirNovoEmail = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await emailService.inserirEmailService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarEmail = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await emailService.atualizarEmailService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarEmail = async function () {
    try {
        return await emailService.listarEmailService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarEmail = async function (id) {
    try {
        return await emailService.buscarEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirEmail = async function (id) {
    try {
        return await emailService.excluirEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoEmail, atualizarEmail, listarEmail, buscarEmail, excluirEmail }
