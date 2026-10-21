const JOI = require('joi')

const emailSchema = JOI.object({
    email: JOI.string()
            .email()
            .max(256)
            .required(),

    id_tipo_email: JOI.number()
                    .integer()
                    .min(0)
                    .required()
})