const express = require('express')

const router = express.Router()

const controller = require('../controllers/tipo_email/controller_tipo_email.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoTipoEmail(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarTipoEmail()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarTipoEmail(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarTipoEmail(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirTipoEmail(req.params.id)
    return responder(res, result)
})

module.exports = router
