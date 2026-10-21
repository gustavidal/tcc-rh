const JOI = require('joi')

const statusFuncionarioSchema = JOI.object({
    status: JOI.string()
            .max(40)
            .required()
})

module.exports = statusFuncionarioSchema