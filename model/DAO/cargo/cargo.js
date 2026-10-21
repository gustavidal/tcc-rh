/***************************************************************************************
 * Objetivo: Arquivo responsável por manipular os dados do CARGO no banco de dados MySQL
 * Data: 21/10/2026 - (quarta-feira)
 * Autor: Kauan Alves Pereira
 * Versão: 1.0
***************************************************************************************/

// Import da biblioteca para manipular dados no Banco de Dados MySQL
const knex = require('knex')

// Import do arquivo de configuração para acesso ao banco de dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

// Cria a conexão com o Banco de Dados MySQL conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

const insertCargo = async function (cargo) {
    try {
        let sql = 'call procCargo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'INSERT',
            cargo.sigla,
            cargo.cargo,
            null
        ])

        if (result && result[0][0][0].id)
            return result[0][0][0].id
        else
            return false

    } catch (error) {
        return false
    }
}

const updateCargo = async function (cargo) {
    try {
        let sql = 'call procCargo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'UPDATE',
            cargo.sigla,
            cargo.cargo,
            cargo.id
        ])

        if (result && result[0][0][0].affectedRows > 0)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

const selectAllCargo = async function () {

    try {
        let sql = 'call procCargo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_ALL',
            null,
            null,
            null
        ])

        if (Array.isArray(result[0][0]))
            return result[0][0]
        else
            return false

    } catch (error) {
        return false
    }
}

const selectByIdCargo = async function (id) {
    try {
        let sql = 'call procCargo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_BY_ID',
            null,
            null,
            id
        ])

        if (Array.isArray(result[0][0]))
            return result[0][0]
        else
            return false

    } catch (error) {
        return false
    }
}

const selectBySiglaCargo = async function (cargo) {
    try {
        let sql = 'call procCargo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_BY_SIGLA',
            cargo.sigla,
            null,
            null
        ])

        if (Array.isArray(result[0][0]))
            return result[0][0]
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    insertCargo,
    updateCargo,
    selectAllCargo,
    selectByIdCargo,
    selectBySiglaCargo
}