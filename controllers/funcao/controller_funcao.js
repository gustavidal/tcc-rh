/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de FUNCAO
**************************************************************************************************************************/
const funcaoService = require('../../services/funcao/service_funcao.js')

const inserirNovoFuncao = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcaoService.inserirFuncaoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarFuncao = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await funcaoService.atualizarFuncaoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarFuncao = async function () {
    try {
        return await funcaoService.listarFuncaoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarFuncao = async function (id) {
    try {
        return await funcaoService.buscarFuncaoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirFuncao = async function (id) {
    try {
        return await funcaoService.excluirFuncaoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoFuncao, atualizarFuncao, listarFuncao, buscarFuncao, excluirFuncao }
