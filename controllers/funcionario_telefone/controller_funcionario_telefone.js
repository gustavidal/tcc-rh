/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FUNCIONARIO_TELEFONE
**************************************************************************************************************************/
const funcionario_telefoneService = require('../../services/funcionario_telefone/service_funcionario_telefone.js')

const inserirNovoFuncionarioTelefone = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionario_telefoneService.inserirFuncionarioTelefoneService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFuncionarioTelefone = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionario_telefoneService.atualizarFuncionarioTelefoneService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFuncionarioTelefone = async function () {
    try {
        return await funcionario_telefoneService.listarFuncionarioTelefoneService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFuncionarioTelefone = async function (id) {
    try {
        return await funcionario_telefoneService.buscarFuncionarioTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFuncionarioTelefone = async function (id) {
    try {
        return await funcionario_telefoneService.excluirFuncionarioTelefoneService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFuncionarioTelefone, atualizarFuncionarioTelefone, listarFuncionarioTelefone, buscarFuncionarioTelefone, excluirFuncionarioTelefone }
