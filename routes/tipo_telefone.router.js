// Import do express
const express = require('express')

// Import do body-parser
const bodyParser = require('body-parser')

// Permitindo a utilização do JSON na body das requisições
const bodyParserJSON = bodyParser.json()

// Criando um objeto de rota para os endpoints
const router = express.Router()

// Import do middleware de autenticação para verificar o token de acesso JWT
const autenticar = require('../middleware/auth.js')

// Import da controller de tipo telefone
const controllerTipoTelefone = require('../controller/tipo_telefone/controller_tipo_telefone.js')

router.post('/', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerTipoTelefone.inserirNovoTipoTelefone(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', autenticar, async function (request, response) {
    let result = await controllerTipoTelefone.listarTipoTelefone()

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerTipoTelefone.buscarTipoTelefone(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerTipoTelefone.atualizarTipoTelefone(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerTipoTelefone.excluirTipoTelefone(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
