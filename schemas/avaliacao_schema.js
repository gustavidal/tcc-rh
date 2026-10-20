const JOI = require('joi')

const avaliacaoSchema = JOI.object({
    data_avaliacao: JOI.date(),

    nota: JOI.number()
        .precision(1)
        .min(-99.9)
        .max(99.9)
        .strict(),
    
    observacao: JOI.string(),

    id_funcionario: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = avaliacaoSchema