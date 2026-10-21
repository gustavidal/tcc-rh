const JOI = require('joi')

const tipoEmailSchema = JOI.object({
    tipo: JOI.string()
            .max(20)
            .required()
})

module.exports = tipoEmailSchema