/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de JORNADA_FUNCIONARIO
**************************************************************************************************************************/
const jornada_funcionarioService = require('../../services/jornada_funcionario/service_jornada_funcionario.js')

const inserirNovoJornadaFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await jornada_funcionarioService.inserirJornadaFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarJornadaFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await jornada_funcionarioService.atualizarJornadaFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarJornadaFuncionario = async function () {
    try {
        return await jornada_funcionarioService.listarJornadaFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarJornadaFuncionario = async function (id) {
    try {
        return await jornada_funcionarioService.buscarJornadaFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirJornadaFuncionario = async function (id) {
    try {
        return await jornada_funcionarioService.excluirJornadaFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoJornadaFuncionario, atualizarJornadaFuncionario, listarJornadaFuncionario, buscarJornadaFuncionario, excluirJornadaFuncionario }
