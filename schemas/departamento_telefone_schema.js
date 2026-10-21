const JOI = require('joi')

const departamentoTelefoneSchema = JOI.object({
    id_departamento: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_telefone: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = departamentoTelefoneSchema