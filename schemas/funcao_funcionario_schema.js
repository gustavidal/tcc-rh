const JOI = require('joi')

const funcaoFuncionarioSchema = JOI.object({
    id_funcao: JOI.number()
                        .integer()
                        .min(1)
                        .required(),

    id_funcionario: JOI.number()
                    .integer()
                    .min(1)
                    .required()
})

module.exports = funcaoFuncionarioSchema