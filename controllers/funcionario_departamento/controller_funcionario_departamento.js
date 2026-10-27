/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FUNCIONARIO_DEPARTAMENTO
**************************************************************************************************************************/
const funcionario_departamentoService = require('../../services/funcionario_departamento/service_funcionario_departamento.js')

const inserirNovoFuncionarioDepartamento = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionario_departamentoService.inserirFuncionarioDepartamentoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFuncionarioDepartamento = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionario_departamentoService.atualizarFuncionarioDepartamentoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFuncionarioDepartamento = async function () {
    try {
        return await funcionario_departamentoService.listarFuncionarioDepartamentoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFuncionarioDepartamento = async function (id) {
    try {
        return await funcionario_departamentoService.buscarFuncionarioDepartamentoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFuncionarioDepartamento = async function (id) {
    try {
        return await funcionario_departamentoService.excluirFuncionarioDepartamentoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFuncionarioDepartamento, atualizarFuncionarioDepartamento, listarFuncionarioDepartamento, buscarFuncionarioDepartamento, excluirFuncionarioDepartamento }
