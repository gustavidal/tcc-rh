const JOI = require('joi')

const competenciaSchema = JOI.object({
    descricao: JOI.string()
        .max(100)
        .required(),
    
    nivel_esperado: JOI.number()
        .precision(2)
        .min(0.00)
        .max(99.99)
        .strict(),

    data_ultima_alteracao: JOI.date(),

    id_tipo_competencia: JOI.number()
        .integer()
        .min(1)
        .required(),

    id_status_competencia: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = competenciaSchema