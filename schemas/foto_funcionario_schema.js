const JOI = require('joi')

const fotoFuncionarioSchema = JOI.object({
    foto: JOI.string()
            .max(250)
})

module.exports = fotoFuncionarioSchema