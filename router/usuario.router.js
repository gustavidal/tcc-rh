// Import do express
const express = require('express')

// Import do body-parser
const bodyParser = require('body-parser')

// Permitindo a utilização do JSON na body das requisições
const bodyParserJSON = bodyParser.json()

// Criando um objeto de rota para os endpoints
const router = express.Router()

// Import da controller de usuario
const controllerUsuario = require('../controller/usuario/controller_usuario.js')

// Import da controller de telefone
const controllerTelefone = require('../controller/telefone/controller_telefone.js')

// Import da controller de foto
const controllerFoto = require('../controller/foto/controller_foto.js')

router.post('/', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerUsuario.inserirNovoUsuario(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', async function (request, response) {
    let result = await controllerUsuario.listarUsuario()

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerUsuario.buscarUsuario(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerUsuario.atualizarUsuario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', async function (request, response) {
    let id     = request.params.id
    let result = await controllerUsuario.excluirUsuario(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/login', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerUsuario.atualizarLoginUsuario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/foto', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFoto.atualizarFoto('usuario', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/foto', async function (request, response) {
    let id     = request.params.id
    let result = await controllerFoto.excluirFoto('usuario', id)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/telefones', async function (request, response) {
    let id     = request.params.id
    let result = await controllerTelefone.listarTelefone('usuario', id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/telefones', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerTelefone.inserirNovoTelefone('usuario', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/telefones/:id_telefone', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let idTelefone  = request.params.id_telefone
    let result      = await controllerTelefone.atualizarTelefone('usuario', dados, id, idTelefone, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/telefones/:id_telefone', async function (request, response) {
    let id         = request.params.id
    let idTelefone = request.params.id_telefone
    let result     = await controllerTelefone.excluirTelefone('usuario', id, idTelefone)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
