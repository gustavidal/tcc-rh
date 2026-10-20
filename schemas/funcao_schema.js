const JOI = require('joi')

const funcaoSchema = JOI.object({
    nome: JOI.string()
            .max(100)
            .required()
})

module.exports = funcaoSchema