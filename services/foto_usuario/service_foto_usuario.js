/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de FOTO_USUARIO
********************************************************************************************/
const foto_usuarioDAO = require('../../models/DAO/foto_usuario/foto_usuario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirFotoUsuarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('fotos-usuario', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await foto_usuarioDAO.insertFotoUsuario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarFotoUsuarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('fotos-usuario', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await foto_usuarioDAO.updateFotoUsuario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarFotoUsuarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('fotos-usuario', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await foto_usuarioDAO.selectAllFotoUsuario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarFotoUsuarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('fotos-usuario', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await foto_usuarioDAO.selectByIdFotoUsuario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirFotoUsuarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('fotos-usuario', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await foto_usuarioDAO.deleteFotoUsuario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirFotoUsuarioService, atualizarFotoUsuarioService, listarFotoUsuarioService, buscarFotoUsuarioService, excluirFotoUsuarioService }
