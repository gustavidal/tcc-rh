const express = require('express')

const router = express.Router()

const controller = require('../controllers/status_meta/controller_status_meta.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoStatusMeta(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarStatusMeta()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarStatusMeta(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarStatusMeta(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirStatusMeta(req.params.id)
    return responder(res, result)
})

module.exports = router
