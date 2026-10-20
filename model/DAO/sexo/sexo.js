/***************************************************************************************
 * Objetivo: Arquivo responsável por manipular os dados do SEXO no banco de dados MySQL
 * Data: 20/10/2026 - (terça-feira)
 * Autor: Kauan Alves Pereira
 * Versão: 1.0
***************************************************************************************/

// Import da biblioteca para manipular dados no Banco de Dados MySQL
const knex = require('knex')

// Import do arquivo de configuração para acesso ao banco de dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

// Cria a conexão com o Banco de Dados MySQL conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

const insertSexo = async function (sexo) {
    try {
        let sql = 'call procSexo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'INSERT',
            sexo.sigla,
            sexo.sexo,
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

const updateSexo = async function (sexo) {
    try {
        let sql = 'call procSexo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'UPDATE',
            sexo.sigla,
            sexo.sexo,
            sexo.id
        ])

        if (result && result[0][0][0].affectedRows > 0)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

const selectAllSexo = async function () {

    try {
        let sql = 'call procSexo(?, ?, ?, ?);'

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

const selectByIdSexo = async function (id) {
    try {
        let sql = 'call procSexo(?, ?, ?, ?);'

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

const selectBySiglaSexo = async function (sexo) {
    try {
        let sql = 'call procSexo(?, ?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_BY_SIGLA',
            sexo.sigla,
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
    insertSexo,
    updateSexo,
    selectAllSexo,
    selectByIdSexo,
    selectBySiglaSexo
}