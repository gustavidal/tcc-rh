const express = require('express')

const router = express.Router()

const controller = require('../controllers/email/controller_email.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoEmail(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarEmail()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarEmail(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarEmail(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirEmail(req.params.id)
    return responder(res, result)
})

module.exports = router
