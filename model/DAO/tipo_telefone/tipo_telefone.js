/***********************************************************************************************
 * Objetivo: Arquivo responsável por manipular os dados do TIPO TELEFONE no banco de dados MySQL
 * Data: 20/10/2026 - (terça-feira)
 * Autor: Kauan Alves Pereira
 * Versão: 1.0
***********************************************************************************************/

// Import da biblioteca para manipular dados no Banco de Dados MySQL
const knex = require('knex')

// Import do arquivo de configuração para acesso ao banco de dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

// Cria a conexão com o Banco de Dados MySQL conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

const insertTipoTelefone = async function (tipoTelefone) {
    try {
        let sql = 'call procTipoTelefone(?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'INSERT',
            tipoTelefone.tipoTelefone,
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

const updateTipoTelefone = async function (tipoTelefone) {
    try {
        let sql = 'call procTipoTelefone(?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'UPDATE',
            tipoTelefone.tipoTelefone,
            tipoTelefone.id
        ])

        if (result && result[0][0][0].affectedRows > 0)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

const selectAllTipoTelefone = async function () {

    try {
        let sql = 'call procTipoTelefone(?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_ALL',
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

const selectByIdTipoTelefone = async function (id) {
    try {
        let sql = 'call procTipoTelefone(?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_BY_ID',
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

const selectByTipoTelefone = async function (tipoTelefone) {
    try {
        let sql = 'call procTipoTelefone(?, ?, ?);'

        let result = await knexConection.raw(sql, [
            'SELECT_BY_TIPO',
            tipoTelefone.tipoTelefone,
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
    insertTipoTelefone,
    updateTipoTelefone,
    selectAllTipoTelefone,
    selectByIdTipoTelefone,
    selectByTipoTelefone
}