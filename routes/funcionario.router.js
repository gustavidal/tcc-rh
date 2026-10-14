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

// Import da controller de funcionario
const controllerFuncionario = require('../controller/funcionario/controller_funcionario.js')

// Import da controller de telefone
const controllerTelefone = require('../controller/telefone/controller_telefone.js')

// Import da controller de email
const controllerEmail = require('../controller/email/controller_email.js')

// Import da controller de foto
const controllerFoto = require('../controller/foto/controller_foto.js')

router.post('/', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerFuncionario.inserirNovoFuncionario(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.get('/', autenticar, async function (request, response) {
    let filtros = request.query
    let result  = await controllerFuncionario.listarFuncionario(filtros)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.buscarFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFuncionario.atualizarFuncionario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.excluirFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/foto', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFoto.atualizarFoto('funcionario', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/foto', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFoto.excluirFoto('funcionario', id)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/telefones', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerTelefone.listarTelefone('funcionario', id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/telefones', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerTelefone.inserirNovoTelefone('funcionario', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/telefones/:id_telefone', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let idTelefone  = request.params.id_telefone
    let result      = await controllerTelefone.atualizarTelefone('funcionario', dados, id, idTelefone, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/telefones/:id_telefone', autenticar, async function (request, response) {
    let id         = request.params.id
    let idTelefone = request.params.id_telefone
    let result     = await controllerTelefone.excluirTelefone('funcionario', id, idTelefone)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/emails', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerEmail.listarEmail('funcionario', id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/emails', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerEmail.inserirNovoEmail('funcionario', dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.put('/:id/emails/:id_email', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let idEmail     = request.params.id_email
    let result      = await controllerEmail.atualizarEmail('funcionario', dados, id, idEmail, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/emails/:id_email', autenticar, async function (request, response) {
    let id      = request.params.id
    let idEmail = request.params.id_email
    let result  = await controllerEmail.excluirEmail('funcionario', id, idEmail)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/funcoes', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.listarFuncaoFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/funcoes', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFuncionario.inserirNovaFuncaoFuncionario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/funcoes/:id_funcao', autenticar, async function (request, response) {
    let id       = request.params.id
    let idFuncao = request.params.id_funcao
    let result   = await controllerFuncionario.excluirFuncaoFuncionario(id, idFuncao)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/departamentos', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.listarDepartamentoFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/departamentos', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFuncionario.inserirNovoDepartamentoFuncionario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/departamentos/:id_departamento', autenticar, async function (request, response) {
    let id             = request.params.id
    let idDepartamento = request.params.id_departamento
    let result         = await controllerFuncionario.excluirDepartamentoFuncionario(id, idDepartamento)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/competencias', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.listarCompetenciaFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/competencias', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFuncionario.inserirNovaCompetenciaFuncionario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/competencias/:id_competencia', autenticar, async function (request, response) {
    let id            = request.params.id
    let idCompetencia = request.params.id_competencia
    let result        = await controllerFuncionario.excluirCompetenciaFuncionario(id, idCompetencia)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/metas-organizacionais', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.listarMetaOrganizacionalFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

router.post('/:id/metas-organizacionais', autenticar, bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let id          = request.params.id
    let result      = await controllerFuncionario.inserirNovaMetaOrganizacionalFuncionario(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

router.delete('/:id/metas-organizacionais/:id_meta_organizacional', autenticar, async function (request, response) {
    let id                   = request.params.id
    let idMetaOrganizacional = request.params.id_meta_organizacional
    let result               = await controllerFuncionario.excluirMetaOrganizacionalFuncionario(id, idMetaOrganizacional)

    response.status(result.status_code)
    response.json(result)
})

router.get('/:id/avaliacoes', autenticar, async function (request, response) {
    let id     = request.params.id
    let result = await controllerFuncionario.listarAvaliacoesFuncionario(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
