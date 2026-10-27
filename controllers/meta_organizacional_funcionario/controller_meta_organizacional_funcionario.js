/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de META_ORGANIZACIONAL_FUNCIONARIO
**************************************************************************************************************************/
const meta_organizacional_funcionarioService = require('../../services/meta_organizacional_funcionario/service_meta_organizacional_funcionario.js')

const inserirNovoMetaOrganizacionalFuncionario = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await meta_organizacional_funcionarioService.inserirMetaOrganizacionalFuncionarioService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarMetaOrganizacionalFuncionario = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await meta_organizacional_funcionarioService.atualizarMetaOrganizacionalFuncionarioService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarMetaOrganizacionalFuncionario = async function () {
    try {
        return await meta_organizacional_funcionarioService.listarMetaOrganizacionalFuncionarioService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarMetaOrganizacionalFuncionario = async function (id) {
    try {
        return await meta_organizacional_funcionarioService.buscarMetaOrganizacionalFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirMetaOrganizacionalFuncionario = async function (id) {
    try {
        return await meta_organizacional_funcionarioService.excluirMetaOrganizacionalFuncionarioService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoMetaOrganizacionalFuncionario, atualizarMetaOrganizacionalFuncionario, listarMetaOrganizacionalFuncionario, buscarMetaOrganizacionalFuncionario, excluirMetaOrganizacionalFuncionario }
