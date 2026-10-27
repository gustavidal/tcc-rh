/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de USUARIO
********************************************************************************************/
const usuarioDAO = require('../../models/DAO/usuario/usuario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirUsuarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('usuarios', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuarioDAO.insertUsuario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarUsuarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('usuarios', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuarioDAO.updateUsuario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarUsuarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('usuarios', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuarioDAO.selectAllUsuario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarUsuarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('usuarios', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuarioDAO.selectByIdUsuario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirUsuarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('usuarios', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await usuarioDAO.deleteUsuario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirUsuarioService, atualizarUsuarioService, listarUsuarioService, buscarUsuarioService, excluirUsuarioService }
