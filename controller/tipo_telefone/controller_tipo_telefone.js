//Import do arquivo de configurações de mensagens do projeto
const configMessages = require('../modulo/configMessages.js')

//Import da DAO
const tipoTelefoneDAO = require('../../model/DAO/tipo_telefone/tipo_telefone.js')

// Import das funções globais
const validarDados = require('../../utils/validar_dados/validar_dados.js')
const tipoTelefoneSchema = require('../../schemas/tipo_telefone_schema.js')

const validarDadosTipoTelefone = function (dados) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))
    let validar = validarDados.validarDados(tipoTelefoneSchema, dados, customMessages)

    return validar
}

//Função INSERT
const inserirNovoTipoTelefone = async function (tipoTelefone, contentType) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            let validar = await validarDadosTipoTelefone(tipoTelefone)
            
            if (validar)
                return validar
            else {
                let result = await tipoTelefoneDAO.insertTipoTelefone(tipoTelefone)

                if (result) {
                    tipoTelefone.id = result

                    customMessages.DEFAULT_MESSAGE.status       = customMessages.SUCCESS_CREATED_ITEM.status
                    customMessages.DEFAULT_MESSAGE.status_code  = customMessages.SUCCESS_CREATED_ITEM.status_code
                    customMessages.DEFAULT_MESSAGE.message      = customMessages.SUCCESS_CREATED_ITEM.message
                    customMessages.DEFAULT_MESSAGE.response     = tipoTelefone

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
const atualizarTipoTelefone = async function (tipoTelefone, id, contentType) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            let resultBuscarID = await buscarTipoTelefone(id)

            if (resultBuscarID.status) {
                let validar = await validarDadosTipoTelefone(tipoTelefone)

                if (!validar) {
                    tipoTelefone.id = Number(id)

                    let result = await tipoTelefoneDAO.updateTipoTelefone(tipoTelefone)

                    if (result) {
                        customMessages.DEFAULT_MESSAGE.status       = customMessages.SUCCESS_UPDATE_ITEM.status
                        customMessages.DEFAULT_MESSAGE.status_code  = customMessages.SUCCESS_UPDATE_ITEM.status_code
                        customMessages.DEFAULT_MESSAGE.message      = customMessages.SUCCESS_UPDATE_ITEM.message
                        customMessages.DEFAULT_MESSAGE.response     = tipoTelefone

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
const listarTipoTelefone = async function () {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let result = await tipoTelefoneDAO.selectAllTipoTelefone()

        if (result) {
            if (result.length > 0) {
                customMessages.DEFAULT_MESSAGE.status                   = customMessages.SUCCESS_RESPONSE.status
                customMessages.DEFAULT_MESSAGE.status_code              = customMessages.SUCCESS_RESPONSE.status_code
            customMessages.DEFAULT_MESSAGE.response.count               = result.length
                customMessages.DEFAULT_MESSAGE.response.tipo_telefone   = result

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
const buscarTipoTelefone = async function (id) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let validarID = validarDados.validarIDs(id, customMessages)
        if (validarID) {
            return validarID
        } else {
            let result = await tipoTelefoneDAO.selectByIdTipoTelefone(id)

            if (result) {
                if (result.length > 0) {
                    customMessages.DEFAULT_MESSAGE.status                   = customMessages.SUCCESS_RESPONSE.status
                    customMessages.DEFAULT_MESSAGE.status_code              = customMessages.SUCCESS_RESPONSE.status_code
                    customMessages.DEFAULT_MESSAGE.response.tipo_telefone   = result

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
const buscarOTipoTelefone = async function (tipo) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let result = await tipoTelefoneDAO.selectByTipoTelefone(tipo)

        if (result) {
            if (result.length > 0) {
                customMessages.DEFAULT_MESSAGE.status                   = customMessages.SUCCESS_RESPONSE.status
                customMessages.DEFAULT_MESSAGE.status_code              = customMessages.SUCCESS_RESPONSE.status_code
                customMessages.DEFAULT_MESSAGE.response.tipo_telefone   = result

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
const excluirTipoTelefone = async function (id) {
    let customMessages = JSON.parse(JSON.stringify(configMessages))

    try {
        let resultBuscarID = await buscarTipoTelefone(id)

        if (resultBuscarID.status) {
            let result = await tipoTelefoneDAO.deleteTipoTelefone(id)

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
    inserirNovoTipoTelefone,
    atualizarTipoTelefone,
    listarTipoTelefone,
    buscarTipoTelefone,
    buscarOTipoTelefone,
    excluirTipoTelefone
}