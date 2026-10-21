const idSchema = require('../../schemas/id_schema.js')

const validarDados = function (schema, dados, customMessages) {
    const { error } = schema.validate(dados, { abortEarly: false })

    if (error) {
        let errorMessages = []

        for (let detalhes of error.details) {
            errorMessages.push(detalhes.message)
        }

        customMessages.ERROR_BAD_REQUEST.field = errorMessages

        return customMessages.ERROR_BAD_REQUEST
    }

    return false
}

const validarIDs = function (id, customMessages) {
    const { error } = idSchema.validate(id, { abortEarly: false })

    if (error) {
        let errorMessages = []

        for (let detalhes of error.details)
            errorMessages.push(detalhes.message)

        customMessages.ERROR_BAD_REQUEST.field = errorMessages
    }

    return false
}

module.exports = {
    validarDados,
    validarIDs
}