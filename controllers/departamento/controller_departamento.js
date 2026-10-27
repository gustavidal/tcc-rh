/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de DEPARTAMENTO
**************************************************************************************************************************/
const departamentoService = require('../../services/departamento/service_departamento.js')

const inserirNovoDepartamento = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await departamentoService.inserirDepartamentoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarDepartamento = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await departamentoService.atualizarDepartamentoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarDepartamento = async function () {
    try {
        return await departamentoService.listarDepartamentoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarDepartamento = async function (id) {
    try {
        return await departamentoService.buscarDepartamentoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirDepartamento = async function (id) {
    try {
        return await departamentoService.excluirDepartamentoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoDepartamento, atualizarDepartamento, listarDepartamento, buscarDepartamento, excluirDepartamento }
