/***************************************************************************************************
 * Objetivo: Arquivo responsável pela padronização das mensagens e status code do projeto de filmes.
 * Data: 17/04/2026 (sexta-feira)
 * Autor: Gustavo Vidal de Abreu
 * Versão: 1.0
***************************************************************************************************/

// Padronização dos retornos da API (cabeçalho)
const DEFAULT_MESSAGE = {
    "api_description": "API para controlar projeto de gestão de pessoas, com foco na integração de dados e apoio à tomada de decisão.",
    "development": "Gustavo Vidal de Abreu",
    "version": "1.0.4.26",
    "status": Boolean,
    "status_code": Number,
    "response": {}
}

// Mensagens de ERRO do projeto de filmes
const ERROR_BAD_REQUEST = { "status": false, "status_code": 400, "message": "Não foi possível processar a requisição devido a erros de entrada de dados." }
const ERROR_INTERNAL_SERVER_MODEL = { "status": false, "status_code": 500, "message": "Não foi possível processar a requisição devido a um erro interno do servidor [MODEL]" }

// Mensagens de SUCESSO do projeto de filmes
const SUCCESS_CREATED_ITEM = { "status": true, "status_code": 201, "message": "Item inserido com sucesso." }

module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,
    ERROR_INTERNAL_SERVER_MODEL,
    SUCCESS_CREATED_ITEM
}