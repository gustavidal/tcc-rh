const JOI = require('joi')

const usuarioSchema = JOI.object({
    nome: JOI.string()
        .max(100)
        .required(),
    
    data_nascimento: JOI.date()
        .required(),
    
    id_foto_usuario: JOI.number()
        .integer()
        .min(1)
        .required()
})

module.exports = usuarioSchema