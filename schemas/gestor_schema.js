const JOI = require('joi')

const gestorSchema = JOI.object({
    id_usuario: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = gestorSchema