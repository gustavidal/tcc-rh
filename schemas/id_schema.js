const JOI = require('joi')

const idSchema = JOI.number()
    .integer()
    .min(1)
    .required()
    .messages({
        'number.base': '[ID] INVÁLIDO',
        'number.integer': '[ID] INVÁLIDO',
        'number.min': '[ID] INVÁLIDO',
        'any.required': '[ID] INVÁLIDO'
    })

module.exports = idSchema