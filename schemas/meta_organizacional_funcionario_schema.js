const JOI = require('joi')

const metaOrganizacionalFuncionarioSchema = JOI.object({
    id_meta_organizacional: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_funcionario: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = metaOrganizacionalFuncionarioSchema