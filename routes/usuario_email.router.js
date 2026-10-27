const express = require('express')

const router = express.Router()

const controller = require('../controllers/usuario_email/controller_usuario_email.js')

const responder = (res, resultado) => res.status(resultado.status_code || 500).json(resultado)

router.post('/', async function (req, res) {
    let result = await controller.inserirNovoUsuarioEmail(req.body, req.headers['content-type'])
    return responder(res, result)
})

router.get('/', async function (req, res) {
    let result = await controller.listarUsuarioEmail()
    return responder(res, result)
})

router.get('/:id', async function (req, res) {
    let result = await controller.buscarUsuarioEmail(req.params.id)
    return responder(res, result)
})

router.put('/:id', async function (req, res) {
    let result = await controller.atualizarUsuarioEmail(req.body, req.params.id, req.headers['content-type'])
    return responder(res, result)
})

router.delete('/:id', async function (req, res) {
    let result = await controller.excluirUsuarioEmail(req.params.id)
    return responder(res, result)
})

module.exports = router
