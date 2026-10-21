const JOI = require('joi')

const departamentoSchema = JOI.object({
    nome: JOI.string()
            .max(100)
            .required()
})

module.exports = departamentoSchema