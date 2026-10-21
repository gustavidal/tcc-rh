const JOI = require('joi')

const funcionarioTelefoneSchema = JOI.object({
    id_funcionario: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_telefone: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = funcionarioTelefoneSchema