const JOI = require('joi')

const fotoFuncionarioSchema = JOI.object({
    foto: JOI.string()
            .max(250)
            .required()
})

module.exports = fotoFuncionarioSchema