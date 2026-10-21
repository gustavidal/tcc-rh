const JOI = require('joi')

const usuarioTelefoneSchema = JOI.object({
    id_usuario: JOI.number()
                .integer()
                .min(1)
                .required(),

    id_telefone: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = usuarioTelefoneSchema