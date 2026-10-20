const JOI = require('joi')

const sexoSchema = JOI.object({
    sexo: JOI.string()
            .max(15)
            .required(),

    sigla: JOI.string()
            .max(3)
            .required()
})

module.exports = sexoSchema