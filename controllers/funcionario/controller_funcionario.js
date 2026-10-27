/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FUNCIONARIO
**************************************************************************************************************************/
const funcionarioService = require('../../services/funcionario/service_funcionario.js')

const inserirNovoFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionarioService.inserirFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionarioService.atualizarFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFuncionario = async function () {
    try {
        return await funcionarioService.listarFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFuncionario = async function (id) {
    try {
        return await funcionarioService.buscarFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFuncionario = async function (id) {
    try {
        return await funcionarioService.excluirFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFuncionario, atualizarFuncionario, listarFuncionario, buscarFuncionario, excluirFuncionario }
