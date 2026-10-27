/*******************************************************************************************
 * Objetivo: Acesso aos dados por meio da procedure procPerfilUsuarioTela
 * Autor: Kayque Brenno Ferreira Almeida
 * Versão: 1.0
********************************************************************************************/

const knexConection = require('../../global_knex/global_knex.js')

// Os parâmetros seguem exatamente a ordem da procedure no banco.
const executarprocPerfilUsuarioTela = async function (dados, transaction = null) {
    try {
        let connection = transaction || knexConection
        let sql = `call procPerfilUsuarioTela(?, ?);`
        let result = await connection.raw(sql, [dados.operacao, dados.id_usuario_param])
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

module.exports = { executarprocPerfilUsuarioTela }
