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

// Import da controller de competencia
const controllerCompetencia = require('../controller/competencia/controller_competencia.js')

router.post('/', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerCompetencia.inserirNovaCompetencia(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', autenticar, async function (request, response) {
    let result = await controllerCompetencia.listarCompetencia()

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerCompetencia.buscarCompetencia(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerCompetencia.atualizarCompetencia(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerCompetencia.excluirCompetencia(id)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/funcionarios', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerCompetencia.listarFuncionariosCompetencia(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
