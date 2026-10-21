const JOI = require('joi')

const administrativoSchema = JOI.object({
    id_usuario: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = administrativoSchema