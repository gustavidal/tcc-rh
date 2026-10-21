const JOI = require('joi')

const departamentoEmailSchema = JOI.object({
    id_departamento: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_email: JOI.number()
                .integer()
                .min(1)
                .required()
})

module.exports = departamentoEmailSchema