const JOI = require('joi')

const gestorLoginSchema = JOI.object({
    email_login: JOI.string()
        .email()
        .max(256)
        .required(),

    senha_hash: JOI.string()
        .min(8)
        .max(512)
        .required(),

    id_usuario: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = gestorLoginSchema