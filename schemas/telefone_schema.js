const JOI = require('joi')
const { min } = require('./foto_funcionario_schema')

const telefoneSchema = JOI.object({
    numero: JOI.string()
            .max(25)
            .required(),

    id_tipo_intervalo: JOI.number()
                        .integer()
                        .min(0)
                        .required()
})

module.exports = telefoneSchema