// Import do express
const express = require('express')

// Import do body-parser
const bodyParser = require('body-parser')

// Permitindo a utilização do JSON na body das requisições
const bodyParserJSON = bodyParser.json()

// Criando um objeto de rota para os endpoints
const router = express.Router()

// Import da controller de meta organizacional
const controllerMetaOrganizacional = require('../controller/meta_organizacional/controller_meta_organizacional.js')

router.post('/', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerMetaOrganizacional.inserirNovaMetaOrganizacional(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', async function (request, response) {
    let result = await controllerMetaOrganizacional.listarMetaOrganizacional()

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerMetaOrganizacional.buscarMetaOrganizacional(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerMetaOrganizacional.atualizarMetaOrganizacional(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerMetaOrganizacional.excluirMetaOrganizacional(id)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/funcionarios', async function (request, response) {
    let id     = request.params.id
    let result = await controllerMetaOrganizacional.listarFuncionariosMetaOrganizacional(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
