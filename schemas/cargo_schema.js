const JOI = require('joi')

const cargoSchema = JOI.object({
    nome: JOI.string()
            .max(65)
            .required()            
})

module.exports = cargoSchema