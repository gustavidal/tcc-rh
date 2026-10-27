/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de SEXO
**************************************************************************************************************************/
const sexoService = require('../../services/sexo/service_sexo.js')

const inserirNovoSexo = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await sexoService.inserirSexoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarSexo = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await sexoService.atualizarSexoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarSexo = async function () {
    try {
        return await sexoService.listarSexoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarSexo = async function (id) {
    try {
        return await sexoService.buscarSexoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirSexo = async function (id) {
    try {
        return await sexoService.excluirSexoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoSexo, atualizarSexo, listarSexo, buscarSexo, excluirSexo }
