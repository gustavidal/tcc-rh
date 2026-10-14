// Import do express
const express = require('express')

// Import do body-parser
const bodyParser = require('body-parser')

// Permitindo a utilização do JSON na body das requisições
const bodyParserJSON = bodyParser.json()

// Criando um objeto de rota para os endpoints
const router = express.Router()

// Import da controller de status competencia
const controllerStatusCompetencia = require('../controller/status_competencia/controller_status_competencia.js')

router.post('/', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerStatusCompetencia.inserirNovoStatusCompetencia(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', async function (request, response) {
    let result = await controllerStatusCompetencia.listarStatusCompetencia()

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerStatusCompetencia.buscarStatusCompetencia(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerStatusCompetencia.atualizarStatusCompetencia(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerStatusCompetencia.excluirStatusCompetencia(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
