/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FUNCAO_FUNCIONARIO
**************************************************************************************************************************/
const funcao_funcionarioService = require('../../services/funcao_funcionario/service_funcao_funcionario.js')

const inserirNovoFuncaoFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcao_funcionarioService.inserirFuncaoFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFuncaoFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcao_funcionarioService.atualizarFuncaoFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFuncaoFuncionario = async function () {
    try {
        return await funcao_funcionarioService.listarFuncaoFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFuncaoFuncionario = async function (id) {
    try {
        return await funcao_funcionarioService.buscarFuncaoFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFuncaoFuncionario = async function (id) {
    try {
        return await funcao_funcionarioService.excluirFuncaoFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFuncaoFuncionario, atualizarFuncaoFuncionario, listarFuncaoFuncionario, buscarFuncaoFuncionario, excluirFuncaoFuncionario }
