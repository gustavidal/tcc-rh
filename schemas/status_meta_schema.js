const JOI = require('joi')

const statusMetaSchema = JOI.object({
    status: JOI.string()
        .max(40)
        .required()
})

module.exports = statusMetaSchema