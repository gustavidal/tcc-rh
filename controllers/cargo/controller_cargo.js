/*************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas regras de negócio de CARGO
**************************************************************************************************************************/
const cargoService = require('../../services/cargo/service_cargo.js')

const inserirNovoCargo = async function (dados, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await cargoService.inserirCargoService(dados)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const atualizarCargo = async function (dados, id, contentType) {
    try {
        if (!String(contentType).toLowerCase().includes('application/json')) return { status_code: 415, message: 'Content-Type deve ser application/json' }
        return await cargoService.atualizarCargoService(dados, id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const listarCargo = async function () {
    try {
        return await cargoService.listarCargoService()
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const buscarCargo = async function (id) {
    try {
        return await cargoService.buscarCargoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

const excluirCargo = async function (id) {
    try {
        return await cargoService.excluirCargoService(id)
    } catch (error) {
        return { status_code: 500, message: 'Erro interno na controller' }
    }
}

module.exports = { inserirNovoCargo, atualizarCargo, listarCargo, buscarCargo, excluirCargo }
