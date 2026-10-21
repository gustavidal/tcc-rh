const JOI = require('joi')

const funcionarioSchema = JOI.object({
    nome_social: JOI.string()
        .max(100),

    nome: JOI.string()
        .max(100)
        .required(),
    
    cpf: JOI.string()
        .max(18)
        .required(),
    
    data_contratacao: JOI.date()
        .required(),
    
    data_nascimento: JOI.date()
        .required(),
    
    numero_matricula: JOI.number()
        .integer()
        .min(1)
        .required(),
    
    id_sexo: JOI.number()
        .integer()
        .min(1)
        .required(),
    
    id_cargo: JOI.number()
        .integer()
        .min(1)
        .required(),
    
    id_gestor: JOI.number()
        .integer()
        .min(1)
        .required(),

    id_foto_funcionario: JOI.number()
        .integer()
        .min(1)
        .required(),

    id_status_funcionario: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = funcionarioSchema