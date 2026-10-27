/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de USUARIO_TELEFONE
**************************************************************************************************************************/
const usuario_telefoneService = require('../../services/usuario_telefone/service_usuario_telefone.js')

const inserirNovoUsuarioTelefone = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await usuario_telefoneService.inserirUsuarioTelefoneService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarUsuarioTelefone = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await usuario_telefoneService.atualizarUsuarioTelefoneService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarUsuarioTelefone = async function () {
    try {
        return await usuario_telefoneService.listarUsuarioTelefoneService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarUsuarioTelefone = async function (id) {
    try {
        return await usuario_telefoneService.buscarUsuarioTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirUsuarioTelefone = async function (id) {
    try {
        return await usuario_telefoneService.excluirUsuarioTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoUsuarioTelefone, atualizarUsuarioTelefone, listarUsuarioTelefone, buscarUsuarioTelefone, excluirUsuarioTelefone }
