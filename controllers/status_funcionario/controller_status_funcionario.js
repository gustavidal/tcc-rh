/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de STATUS_FUNCIONARIO
**************************************************************************************************************************/
const status_funcionarioService = require('../../services/status_funcionario/service_status_funcionario.js')

const inserirNovoStatusFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await status_funcionarioService.inserirStatusFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarStatusFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await status_funcionarioService.atualizarStatusFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarStatusFuncionario = async function () {
    try {
        return await status_funcionarioService.listarStatusFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarStatusFuncionario = async function (id) {
    try {
        return await status_funcionarioService.buscarStatusFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirStatusFuncionario = async function (id) {
    try {
        return await status_funcionarioService.excluirStatusFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoStatusFuncionario, atualizarStatusFuncionario, listarStatusFuncionario, buscarStatusFuncionario, excluirStatusFuncionario }
