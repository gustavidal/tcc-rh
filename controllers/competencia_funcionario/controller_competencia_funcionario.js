/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de COMPETENCIA_FUNCIONARIO
**************************************************************************************************************************/
const competencia_funcionarioService = require('../../services/competencia_funcionario/service_competencia_funcionario.js')

const inserirNovoCompetenciaFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await competencia_funcionarioService.inserirCompetenciaFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarCompetenciaFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await competencia_funcionarioService.atualizarCompetenciaFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarCompetenciaFuncionario = async function () {
    try {
        return await competencia_funcionarioService.listarCompetenciaFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarCompetenciaFuncionario = async function (id) {
    try {
        return await competencia_funcionarioService.buscarCompetenciaFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirCompetenciaFuncionario = async function (id) {
    try {
        return await competencia_funcionarioService.excluirCompetenciaFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoCompetenciaFuncionario, atualizarCompetenciaFuncionario, listarCompetenciaFuncionario, buscarCompetenciaFuncionario, excluirCompetenciaFuncionario }
