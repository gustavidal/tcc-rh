const JOI = require('joi')

const metaOrganizacionalSchema = JOI.object({
    titulo: JOI.string()
        .max(150)
        .required(),

    descricao: JOI.string()
})

module.exports = metaOrganizacionalSchema