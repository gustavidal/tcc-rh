//Import do arquivo de configurações de mensagens do projeto
const configMessages = require('../modulo/configMessages.js')

//Import da DAO
const cargoDAO = require('../../model/DAO/cargo/cargo.js')

// Import das funções globais
const validarDados = require('../../utils/validar_dados/validar_dados.js')

const validarDadosCargo = function (dados) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))
    let validar = validarDados.validarDados(contatoEmergenciaSchema, dados, customMessages)

    return validar
}

//Função INSERT
const inserirNovoCargo = async function (cargo, contentType) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            let validar = await validarDadosCargo(cargo)
            
            if (validar)
                return validar
            else {
                let result = await cargoDAO.insertCargo(cargo)

                if (result) {
                    cargo.id = result

                    customMessages.DEFAULT_MESSAGE.status       = customMessages.SUCCESS_CREATED_ITEM.status
                    customMessages.DEFAULT_MESSAGE.status_code  = customMessages.SUCCESS_CREATED_ITEM.status_code
                    customMessages.DEFAULT_MESSAGE.message      = customMessages.SUCCESS_CREATED_ITEM.message
                    customMessages.DEFAULT_MESSAGE.response     = cargo

                    return customMessages.DEFAULT_MESSAGE
                } else
                    return customMessages.ERROR_INTERNAL_SERVER_MODEL
            }
        } else {
            return customMessages.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função ATUALIZAR
const atualizarCargo = async function (cargo, id, contentType) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            let resultBuscarID = await buscarCargo(id)

            if (resultBuscarID.status) {
                let validar = await validarDadosCargo(cargo)

                if (!validar) {
                    cargo.id = Number(id)

                    let result = await cargoDAO.updateCargo(cargo)

                    if (result) {
                        customMessages.DEFAULT_MESSAGE.status       = customMessages.SUCCESS_UPDATE_ITEM.status
                        customMessages.DEFAULT_MESSAGE.status_code  = customMessages.SUCCESS_UPDATE_ITEM.status_code
                        customMessages.DEFAULT_MESSAGE.message      = customMessages.SUCCESS_UPDATE_ITEM.message
                        customMessages.DEFAULT_MESSAGE.response     = cargo

                        return customMessages.DEFAULT_MESSAGE
                    } else
                        return customMessages.ERROR_INTERNAL_SERVER_MODEL
                } else
                    return validar
            } else
                return resultBuscarID
        } else
            return customMessages.ERROR_CONTENT_TYPE
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função LISTAR TODOS
const listarCargo = async function () {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let result = await cargoDAO.selectAllCargo()

        if (result) {
            if (result.length > 0) {
                customMessages.DEFAULT_MESSAGE.status           = customMessages.SUCCESS_RESPONSE.status
                customMessages.DEFAULT_MESSAGE.status_code      = customMessages.SUCCESS_RESPONSE.status_code
            customMessages.DEFAULT_MESSAGE.response.count       = result.length
                customMessages.DEFAULT_MESSAGE.response.cargo   = result

                return customMessages.DEFAULT_MESSAGE
            } else
                return customMessages.ERROR_NOT_FOUND
        } else
            return customMessages.ERROR_INTERNAL_SERVER_MODEL
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função BUSCAR POR ID
const buscarCargo = async function (id) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let validarID = validarDados.validarIDs(id, customMessages)
        if (validarID) {
            return validarID
        } else {
            let result = await cargoDAO.selectByIdCargo(id)

            if (result) {
                if (result.length > 0) {
                    customMessages.DEFAULT_MESSAGE.status           = customMessages.SUCCESS_RESPONSE.status
                    customMessages.DEFAULT_MESSAGE.status_code      = customMessages.SUCCESS_RESPONSE.status_code
                    customMessages.DEFAULT_MESSAGE.response.cargo   = result

                    return customMessages.DEFAULT_MESSAGE
                } else 
                    return customMessages.ERROR_NOT_FOUND
            } else {
                return customMessages.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função BUSCAR POR ID
const buscarSiglaCargo = async function (sigla) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let result = await cargoDAO.selectBySiglaCargo(sigla)

        if (result) {
            if (result.length > 0) {
                customMessages.DEFAULT_MESSAGE.status           = customMessages.SUCCESS_RESPONSE.status
                customMessages.DEFAULT_MESSAGE.status_code      = customMessages.SUCCESS_RESPONSE.status_code
                customMessages.DEFAULT_MESSAGE.response.cargo   = result

                return customMessages.DEFAULT_MESSAGE
            } else 
                return customMessages.ERROR_NOT_FOUND
        } else {
            return customMessages.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

//Função EXCLUIR
const excluirCargo = async function (id) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let resultBuscarID = await buscarCargo(id)

        if (resultBuscarID.status) {
            let result = await cargoDAO.deleteCargo(id)

            if (result) {
                return customMessages.SUCCESS_DELETE_ITEM
            } else
                return customMessages.ERROR_INTERNAL_SERVER_MODEL
        } else
            return resultBuscarID
    } catch (error) {
        return customMessages.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirNovoCargo,
    atualizarCargo,
    listarCargo,
    buscarCargo,
    buscarSiglaCargo,
    excluirCargo
}