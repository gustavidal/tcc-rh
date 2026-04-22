/***********************************************************************************************************
 * Objetivo: Arquivo responsável pela padronização das mensagens e status code do projeto gestão de pessoas.
 * Data: 17/04/2026 (sexta-feira)
 * Autor: Gustavo Vidal de Abreu
 * Versão: 1.0
***********************************************************************************************************/

// Padronização dos retornos da API (cabeçalho)
const DEFAULT_MESSAGE = {
    "api_description": "API para controlar projeto de gestão de pessoas.",
    "development": "Gustavo Vidal de Abreu",
    "version": "1.0.4.26",
    "status": Boolean,
    "status_code": Number,
    "response": {}
}

// Mensagens de ERRO do projeto de gestão de pessoas
const ERROR_BAD_REQUEST                = { "status": false, "status_code": 400, "message": "Não foi possível processar a requisição devido a erros de entrada de dados." }
const ERROR_CONTENT_TYPE               = { "status": false, "status_code": 415, "message": "Não foi possível processar a requisição devido ao formato de dados encaminhado não ser suportado pelo servidor. Deve-se ser utilizado apenas JSON." }
const ERROR_INTERNAL_SERVER_CONTROLLER = { "status": false, "status_code": 500, "message": "Não foi possível processar a requisição devido a um erro interno do servidor [CONTROLLER]." }
const ERROR_INTERNAL_SERVER_MODEL      = { "status": false, "status_code": 500, "message": "Não foi possível processar a requisição devido a um erro interno do servidor [MODEL]." }

// Mensagens de SUCESSO do projeto de gestão de pessoas
const SUCCESS_CREATED_ITEM = { "status": true, "status_code": 201, "message": "Item inserido com sucesso." }

module.exports = {
    // Default
    DEFAULT_MESSAGE,

    // Error
    ERROR_BAD_REQUEST,
    ERROR_CONTENT_TYPE,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_INTERNAL_SERVER_MODEL,

    // Success
    SUCCESS_CREATED_ITEM
}