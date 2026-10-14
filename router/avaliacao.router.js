// Import do express
const express = require('express')

// Import do body-parser
const bodyParser = require('body-parser')

// Permitindo a utilização do JSON na body das requisições
const bodyParserJSON = bodyParser.json()

// Criando um objeto de rota para os endpoints
const router = express.Router()

// Import da controller de avaliacao
const controllerAvaliacao = require('../controller/avaliacao/controller_avaliacao.js')

router.post('/', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerAvaliacao.inserirNovaAvaliacao(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', async function (request, response) {
    let filtros = request.query
    let result  = await controllerAvaliacao.listarAvaliacao(filtros)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerAvaliacao.buscarAvaliacao(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerAvaliacao.atualizarAvaliacao(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerAvaliacao.excluirAvaliacao(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
