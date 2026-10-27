/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de USUARIO
**************************************************************************************************************************/
const usuarioService = require('../../services/usuario/service_usuario.js')

const inserirNovoUsuario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await usuarioService.inserirUsuarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarUsuario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await usuarioService.atualizarUsuarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarUsuario = async function () {
    try {
        return await usuarioService.listarUsuarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarUsuario = async function (id) {
    try {
        return await usuarioService.buscarUsuarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirUsuario = async function (id) {
    try {
        return await usuarioService.excluirUsuarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoUsuario, atualizarUsuario, listarUsuario, buscarUsuario, excluirUsuario }
