const JOI = require('joi')

const statusCompetenciaSchema = Object({
    status: JOI.string()
            .max(40)
            .required()
})

module.exports = statusCompetenciaSchema