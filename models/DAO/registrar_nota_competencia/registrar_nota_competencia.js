/*******************************************************************************************
 * Objetivo: Acesso aos dados por meio da procedure procRegistrarNotaCompetencia
 * Autor: Kayque Brenno Ferreira Almeida
 * Versão: 1.0
********************************************************************************************/

const knexConection = require('../../global_knex/global_knex.js')

// Os parâmetros seguem exatamente a ordem da procedure no banco.
const executarprocRegistrarNotaCompetencia = async function (dados, transaction = null) {
    try {
        let connection = transaction || knexConection
        let sql = `call procRegistrarNotaCompetencia(?, ?, ?, ?, ?);`
        let result = await connection.raw(sql, [dados.id_avaliacao_param, dados.id_competencia_param, dados.nota_param, dados.observacao_param, dados.id_usuario_param])
        if (Array.isArray(result[0]) && Array.isArray(result[0][0]))
            return result[0][0]
        else
            return result[0]
    } catch (error) {
        if (transaction) throw error
        console.log(error)
        return false
    }
}

module.exports = { executarprocRegistrarNotaCompetencia }
