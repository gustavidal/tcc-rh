/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FOTO_FUNCIONARIO
**************************************************************************************************************************/
const foto_funcionarioService = require('../../services/foto_funcionario/service_foto_funcionario.js')

const inserirNovoFotoFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await foto_funcionarioService.inserirFotoFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFotoFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await foto_funcionarioService.atualizarFotoFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFotoFuncionario = async function () {
    try {
        return await foto_funcionarioService.listarFotoFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFotoFuncionario = async function (id) {
    try {
        return await foto_funcionarioService.buscarFotoFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFotoFuncionario = async function (id) {
    try {
        return await foto_funcionarioService.excluirFotoFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFotoFuncionario, atualizarFotoFuncionario, listarFotoFuncionario, buscarFotoFuncionario, excluirFotoFuncionario }
