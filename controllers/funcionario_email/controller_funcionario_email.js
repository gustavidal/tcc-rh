/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FUNCIONARIO_EMAIL
**************************************************************************************************************************/
const funcionario_emailService = require('../../services/funcionario_email/service_funcionario_email.js')

const inserirNovoFuncionarioEmail = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionario_emailService.inserirFuncionarioEmailService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFuncionarioEmail = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcionario_emailService.atualizarFuncionarioEmailService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFuncionarioEmail = async function () {
    try {
        return await funcionario_emailService.listarFuncionarioEmailService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFuncionarioEmail = async function (id) {
    try {
        return await funcionario_emailService.buscarFuncionarioEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFuncionarioEmail = async function (id) {
    try {
        return await funcionario_emailService.excluirFuncionarioEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFuncionarioEmail, atualizarFuncionarioEmail, listarFuncionarioEmail, buscarFuncionarioEmail, excluirFuncionarioEmail }
