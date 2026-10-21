const JOI = require('joi')

const funcionarioDepartamentoSchema = JOI.object({
    id_funcionario: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_departamento: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = funcionarioDepartamentoSchema