/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de DEPARTAMENTO_TELEFONE
**************************************************************************************************************************/
const departamento_telefoneService = require('../../services/departamento_telefone/service_departamento_telefone.js')

const inserirNovoDepartamentoTelefone = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await departamento_telefoneService.inserirDepartamentoTelefoneService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarDepartamentoTelefone = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await departamento_telefoneService.atualizarDepartamentoTelefoneService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarDepartamentoTelefone = async function () {
    try {
        return await departamento_telefoneService.listarDepartamentoTelefoneService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarDepartamentoTelefone = async function (id) {
    try {
        return await departamento_telefoneService.buscarDepartamentoTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirDepartamentoTelefone = async function (id) {
    try {
        return await departamento_telefoneService.excluirDepartamentoTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoDepartamentoTelefone, atualizarDepartamentoTelefone, listarDepartamentoTelefone, buscarDepartamentoTelefone, excluirDepartamentoTelefone }
