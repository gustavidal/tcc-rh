/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de DEPARTAMENTO_EMAIL
**************************************************************************************************************************/
const departamento_emailService = require('../../services/departamento_email/service_departamento_email.js')

const inserirNovoDepartamentoEmail = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await departamento_emailService.inserirDepartamentoEmailService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarDepartamentoEmail = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await departamento_emailService.atualizarDepartamentoEmailService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarDepartamentoEmail = async function () {
    try {
        return await departamento_emailService.listarDepartamentoEmailService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarDepartamentoEmail = async function (id) {
    try {
        return await departamento_emailService.buscarDepartamentoEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirDepartamentoEmail = async function (id) {
    try {
        return await departamento_emailService.excluirDepartamentoEmailService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoDepartamentoEmail, atualizarDepartamentoEmail, listarDepartamentoEmail, buscarDepartamentoEmail, excluirDepartamentoEmail }
