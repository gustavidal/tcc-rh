const JOI = require('joi')

const tipoTelefoneSchema = JOI.object({
    tipo: JOI.string()
            .max(15)
            .required()
})

module.exports = tipoTelefoneSchema