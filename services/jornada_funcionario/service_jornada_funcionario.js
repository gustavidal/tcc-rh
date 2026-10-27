/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de JORNADA_FUNCIONARIO
********************************************************************************************/
const jornada_funcionarioDAO = require('../../models/DAO/jornada_funcionario/jornada_funcionario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirJornadaFuncionarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('jornadas', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await jornada_funcionarioDAO.insertJornadaFuncionario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarJornadaFuncionarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('jornadas', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await jornada_funcionarioDAO.updateJornadaFuncionario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarJornadaFuncionarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('jornadas', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await jornada_funcionarioDAO.selectAllJornadaFuncionario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarJornadaFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('jornadas', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await jornada_funcionarioDAO.selectByIdJornadaFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirJornadaFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('jornadas', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await jornada_funcionarioDAO.deleteJornadaFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirJornadaFuncionarioService, atualizarJornadaFuncionarioService, listarJornadaFuncionarioService, buscarJornadaFuncionarioService, excluirJornadaFuncionarioService }
