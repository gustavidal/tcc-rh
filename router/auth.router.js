// Import do express
const express = require('express')

// Import do body-parser
const bodyParser = require('body-parser')

// Permitindo a utilização do JSON na body das requisições
const bodyParserJSON = bodyParser.json()

// Criando um objeto de rota para os endpoints
const router = express.Router()

// Import da controller de auth
const controllerAuth = require('../controller/auth/controller_auth.js')

router.post('/login', bodyParserJSON, async function (request, response) {
    let dados       = request.body
    let contentType = request.headers['content-type']
    let result      = await controllerAuth.login(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router
