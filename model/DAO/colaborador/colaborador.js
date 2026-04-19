/******************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de dados do colaborador no banco de dados MySQL.
 * Data: 15/04/2026 (quarta-feira)
 * Autor: Gustavo Vidal de Abreu
 * Versão: 1.0
******************************************************************************************/

// Import da biblioteca para manipular dados no Banco de Dados MySQL
const knex = require('knex')

// Import do arquivo de configurações para acesso ao Banco de Dados
const knexDatabaseConfig = require('../../database_config/knexConfig.js')

// Criar conexão com o Banco de Dados MySQL conforme o arquivo de configuração
const knexConection = knex(knexDatabaseConfig.development)

// Função para inserir um novo colaborador no banco de dados
const insertColaborador = async function (colaborador) {
    
}

// Função para atualizar um colaborador existente no banco de dados
const updateColaborador = async function (colaborador) {

}

// Função para retornar todos os dados de colaborador do banco de dados
const selectAllColaborador = async function () {

}

// Função para retornar um colaborador filtrado pelo id
const selectByIdColaborador = async function (id) {

}

// Função para excluir um colaborador filtrado pelo id
const deleteColaborador = async function (id) {

}

module.exports = {
    insertColaborador,
    updateColaborador,
    selectAllColaborador,
    selectByIdColaborador,
    deleteColaborador
}