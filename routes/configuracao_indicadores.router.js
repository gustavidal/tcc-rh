const express = require('express')

const router = express.Router()

const controller = require('../controllers/configuracao_indicadores/controller_configuracao_indicadores.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoConfiguracaoIndicadores(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarConfiguracaoIndicadores()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarConfiguracaoIndicadores(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarConfiguracaoIndicadores(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirConfiguracaoIndicadores(req.params.id)
    return responder(res, result)
})

module.exports = router
