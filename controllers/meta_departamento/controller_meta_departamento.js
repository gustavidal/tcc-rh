/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de META_DEPARTAMENTO
**************************************************************************************************************************/
const meta_departamentoService = require('../../services/meta_departamento/service_meta_departamento.js')

const inserirNovoMetaDepartamento = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await meta_departamentoService.inserirMetaDepartamentoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarMetaDepartamento = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await meta_departamentoService.atualizarMetaDepartamentoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarMetaDepartamento = async function () {
    try {
        return await meta_departamentoService.listarMetaDepartamentoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarMetaDepartamento = async function (id) {
    try {
        return await meta_departamentoService.buscarMetaDepartamentoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirMetaDepartamento = async function (id) {
    try {
        return await meta_departamentoService.excluirMetaDepartamentoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoMetaDepartamento, atualizarMetaDepartamento, listarMetaDepartamento, buscarMetaDepartamento, excluirMetaDepartamento }
