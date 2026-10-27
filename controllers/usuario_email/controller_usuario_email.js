/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de USUARIO_EMAIL
**************************************************************************************************************************/
const usuario_emailService = require('../../services/usuario_email/service_usuario_email.js')

const inserirNovoUsuarioEmail = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await usuario_emailService.inserirUsuarioEmailService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarUsuarioEmail = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await usuario_emailService.atualizarUsuarioEmailService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarUsuarioEmail = async function () {
    try {
        return await usuario_emailService.listarUsuarioEmailService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarUsuarioEmail = async function (id) {
    try {
        return await usuario_emailService.buscarUsuarioEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirUsuarioEmail = async function (id) {
    try {
        return await usuario_emailService.excluirUsuarioEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoUsuarioEmail, atualizarUsuarioEmail, listarUsuarioEmail, buscarUsuarioEmail, excluirUsuarioEmail }
