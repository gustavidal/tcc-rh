const JOI = require('joi')

const competenciaFuncionarioSchema = JOI.object({
    id_competencia: JOI.number()
                    .integer()
                    .min(1)
                    .required(),

    id_funcionario: JOI.number()
                    .integer()
                    
})