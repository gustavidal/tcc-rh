const JOI = require('joi')

const tipoCompetenciaSchema = JOI.object({
    tipo: JOI.string()
            .max(40)
            .required()
})

module.exports = tipoCompetenciaSchema