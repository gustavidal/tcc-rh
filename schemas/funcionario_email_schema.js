const JOI = require('joi')

const funcionarioEmailSchema = JOI.object({
    id_funcionario: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_email: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = funcionarioEmailSchema