const JOI = require('joi')

const competenciaSchema = JOI.object({
    descricao: JOI.string()
        .max(100)
        .required()
})

module.exports = competenciaSchema