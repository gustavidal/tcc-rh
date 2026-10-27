/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FOTO_USUARIO
**************************************************************************************************************************/
const foto_usuarioService = require('../../services/foto_usuario/service_foto_usuario.js')

const inserirNovoFotoUsuario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await foto_usuarioService.inserirFotoUsuarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFotoUsuario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await foto_usuarioService.atualizarFotoUsuarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFotoUsuario = async function () {
    try {
        return await foto_usuarioService.listarFotoUsuarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFotoUsuario = async function (id) {
    try {
        return await foto_usuarioService.buscarFotoUsuarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFotoUsuario = async function (id) {
    try {
        return await foto_usuarioService.excluirFotoUsuarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFotoUsuario, atualizarFotoUsuario, listarFotoUsuario, buscarFotoUsuario, excluirFotoUsuario }
