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

// Import da controller de departamento
const controllerDepartamento = require('../controller/departamento/controller_departamento.js')

// Import da controller de telefone
const controllerTelefone = require('../controller/telefone/controller_telefone.js')

// Import da controller de email
const controllerEmail = require('../controller/email/controller_email.js')

router.post('/', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerDepartamento.inserirNovoDepartamento(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', autenticar, async function (request, response) {
    let result = await controllerDepartamento.listarDepartamento()

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerDepartamento.buscarDepartamento(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerDepartamento.atualizarDepartamento(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerDepartamento.excluirDepartamento(id)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/telefones', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerTelefone.listarTelefone('departamento', id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/telefones', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerTelefone.inserirNovoTelefone('departamento', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/telefones/:id_telefone', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let idTelefone  = request.params.id_telefone
    let result      = await controllerTelefone.atualizarTelefone('departamento', dados, id, idTelefone, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/telefones/:id_telefone', autenticar, async function (request, response) {
    let id         = request.params.id
    let idTelefone = request.params.id_telefone
    let result     = await controllerTelefone.excluirTelefone('departamento', id, idTelefone)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/emails', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerEmail.listarEmail('departamento', id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/emails', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerEmail.inserirNovoEmail('departamento', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/emails/:id_email', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let idEmail     = request.params.id_email
    let result      = await controllerEmail.atualizarEmail('departamento', dados, id, idEmail, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/emails/:id_email', autenticar, async function (request, response) {
    let id      = request.params.id
    let idEmail = request.params.id_email
    let result  = await controllerEmail.excluirEmail('departamento', id, idEmail)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/funcionarios', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerDepartamento.listarFuncionariosDepartamento(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
