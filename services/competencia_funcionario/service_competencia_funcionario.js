/*******************************************************************************************
 * Objetivo: Validação de dados, chamadas à DAO e mensagens de COMPETENCIA_FUNCIONARIO
********************************************************************************************/
const competencia_funcionarioDAO = require('../../models/DAO/competencia_funcionario/competencia_funcionario.js')
const { validar } = require('../../utils/validacao_recurso.js')

const inserirCompetenciaFuncionarioService = async function (dados, transaction = null) {
    try {
        let dadosValidacao = dados
        let validacao = validar('competencias-colaborador', 'INSERT', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competencia_funcionarioDAO.insertCompetenciaFuncionario(dados, transaction)
        return { status_code: 201, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const atualizarCompetenciaFuncionarioService = async function (dados, id, transaction = null) {
    try {
        let dadosValidacao = { ...dados, id_param: id }
        let validacao = validar('competencias-colaborador', 'UPDATE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competencia_funcionarioDAO.updateCompetenciaFuncionario(dados, id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const listarCompetenciaFuncionarioService = async function (transaction = null) {
    try {
        let dadosValidacao = {}
        let validacao = validar('competencias-colaborador', 'SELECT_ALL', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competencia_funcionarioDAO.selectAllCompetenciaFuncionario(transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const buscarCompetenciaFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('competencias-colaborador', 'SELECT_BY_ID', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competencia_funcionarioDAO.selectByIdCompetenciaFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

const excluirCompetenciaFuncionarioService = async function (id, transaction = null) {
    try {
        let dadosValidacao = { id_param: id }
        let validacao = validar('competencias-colaborador', 'DELETE', dadosValidacao)
        if (validacao.erro) return { status_code: validacao.status, message: validacao.erro }
        let result = await competencia_funcionarioDAO.deleteCompetenciaFuncionario(id, transaction)
        return { status_code: 200, response: result }
    } catch (error) {
        return { status_code: 500, message: 'Erro interno no banco de dados' }
    }
}

module.exports = { inserirCompetenciaFuncionarioService, atualizarCompetenciaFuncionarioService, listarCompetenciaFuncionarioService, buscarCompetenciaFuncionarioService, excluirCompetenciaFuncionarioService }
