const express = require('express')

const router = express.Router()

const controller = require('../controllers/apontamento_horas/controller_apontamento_horas.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoApontamentoHoras(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarApontamentoHoras()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarApontamentoHoras(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarApontamentoHoras(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirApontamentoHoras(req.params.id)
    return responder(res, result)
})

module.exports = router
